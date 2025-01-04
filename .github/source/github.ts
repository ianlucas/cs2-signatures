import { assert } from "@ianlucas/cs2-lib";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { tryReadFile, workdir } from "./filesystem.js";

export class GitHubSource {
    public id: string;
    public repo: string;
    public framework: string;
    public branch: string;
    public filepath: string;
    public commitPath: string;
    public gamedataPath: string;

    constructor({
        id,
        repo,
        framework,
        branch,
        filepath
    }: {
        id: string;
        repo: string;
        framework: string;
        branch: string;
        filepath: string;
    }) {
        this.id = id;
        this.repo = repo;
        this.framework = framework;
        this.branch = branch;
        this.filepath = filepath;
        this.commitPath = join(workdir, `${id}.commit`);
        this.gamedataPath = join(workdir, `${id}.gamedata`);
    }

    async fetchLatestCommitSha() {
        try {
            const url = new URL("https://api.github.com");
            url.pathname = `/repos/${this.repo}/commits`;
            url.searchParams.append("path", this.filepath);
            url.searchParams.append("per_page", "1");
            const response = (await fetch(url).then((response) => response.json())) as {
                sha?: string;
            }[];
            if (response.length > 0) {
                return response[0]?.sha;
            }
        } catch (error) {
            console.error(error);
        }
        return undefined;
    }

    async fetchGamedata() {
        try {
            const url = new URL("https://raw.githubusercontent.com");
            url.pathname = `/${this.repo}/${this.branch}/${this.filepath}`;
            const response = await fetch(url);
            if (response.ok) {
                return await response.text();
            }
        } catch (error) {
            console.error(error);
        }
        return undefined;
    }

    async readGamedata() {
        return await readFile(this.gamedataPath, "utf-8");
    }

    async validate(): Promise<{ hasUpdate: boolean }> {
        const existingCommitSha = (await tryReadFile(this.commitPath)) ?? "";
        const latestCommitSha = await this.fetchLatestCommitSha();
        assert(latestCommitSha !== undefined, `Failed to get latest commit for ${this.repo}!`);
        if (existingCommitSha === latestCommitSha) {
            console.log(`${this.repo} is up to date.`);
            return { hasUpdate: false };
        }
        const data = await this.fetchGamedata();
        assert(data !== undefined, `Failed to download gamedata from ${this.repo}!`);
        await writeFile(this.commitPath, latestCommitSha, "utf-8");
        await writeFile(this.gamedataPath, data, "utf-8");
        console.log(`Downloaded gamedata from ${this.repo} (commit: ${latestCommitSha.slice(0, 7)})`);
        return { hasUpdate: true };
    }
}
