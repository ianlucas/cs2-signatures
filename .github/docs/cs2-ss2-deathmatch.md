# cs2-ss2-deathmatch 

Last updated: February 22, 2026 at 2:50:21 PM GMT

* Manifests: [4203720348571784882](https://steamdb.info/depot/2347770/history/?changeid=M:4203720348571784882), [6940105521937895955](https://steamdb.info/depot/2347771/history/?changeid=M:6940105521937895955), [6429314027710117564](https://steamdb.info/depot/2347773/history/?changeid=M:6429314027710117564)
* Repository: https://github.com/ianlucas/cs2-ss2-deathmatch
* Gamedata: https://github.com/ianlucas/cs2-ss2-deathmatch/blob/main/resources/gamedata/signatures.jsonc

## Signatures

### RandomSpawnPatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅⚠️(7)</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\x85\x2A\x2A\x2A\x2A\x41\x0F\xB6\x84\x24\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
0F 85 ? ? ? ? 41 0F B6 84 24 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x74\x2A\xBA\x2A\x2A\x2A\x2A\x48\x8D\x0D\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\xC8\x48\x85\xC0\x75\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x48\x2A\x0F\xB6\x86
</pre>
</td><td>
<pre>
74 ? BA ? ? ? ? 48 8D 0D ? ? ? ? E8 ? ? ? ? 48 8B C8 48 85 C0 75 ? 48 8B 05 ? ? ? ? 48 8B 48 ? 0F B6 86
</pre>
</td></tr></table>

### DeathmatchScorePatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\xE8\x2A\x2A\x2A\x2A\x58\x5A\x48\x8D\x65\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x90\x45\x84\xF6
</pre>
</td><td>
<pre>
E8 ? ? ? ? 58 5A 48 8D 65 ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 90 45 84 F6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xE8\x2A\x2A\x2A\x2A\x48\x8B\xAC\x24\x2A\x2A\x2A\x2A\x4C\x8D\x9C\x24
</pre>
</td><td>
<pre>
E8 ? ? ? ? 48 8B AC 24 ? ? ? ? 4C 8D 9C 24
</pre>
</td></tr></table>

### RespawnSoundPatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\xE8\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\x0F\x1F\x00\x31\xC0\xBE
</pre>
</td><td>
<pre>
E8 ? ? ? ? E9 ? ? ? ? 0F 1F 00 31 C0 BE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xE8\x2A\x2A\x2A\x2A\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x8D\x8F\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x84\xC0
</pre>
</td><td>
<pre>
E8 ? ? ? ? 48 8D 15 ? ? ? ? 48 8D 8F ? ? ? ? E8 ? ? ? ? 84 C0
</pre>
</td></tr></table>

