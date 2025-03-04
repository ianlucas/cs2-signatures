# cs2-match-plugin 

Last updated: March 4, 2025 at 12:36:17 AM UTC

* Manifests: [1455570722419444947](https://steamdb.info/depot/2347771/history/?changeid=M:1455570722419444947), [7950633294119536868](https://steamdb.info/depot/2347773/history/?changeid=M:7950633294119536868)
* Repository: https://github.com/ianlucas/cs2-match-plugin
* Gamedata: https://github.com/ianlucas/cs2-match-plugin/blob/master/gamedata/match.json

## Signatures

### TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x41\x55
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 41 55
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xF3\x0F\x11\x85
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 11 85
</pre>
</td></tr></table>

### ChangeTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\xB6\xA9
</pre>
</td><td>
<pre>
40 55 56 57 48 81 EC ? ? ? ? 0F B6 A9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x44\x0F\xB6\xB7\x2A\x2A\x2A\x2A\x44\x39\xF6
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 44 0F B6 B7 ? ? ? ? 44 39 F6
</pre>
</td></tr></table>

### IncrementNumMVPs

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x57\x41\x57\x48\x8B\xEC\x48\x81\xEC
</pre>
</td><td>
<pre>
40 55 57 41 57 48 8B EC 48 81 EC
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x8D\x3D\x2A\x2A\x2A\x2A\x89\xF3
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 8D 3D ? ? ? ? 89 F3
</pre>
</td></tr></table>

### HandleSwapTeams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x48\x2A\x55\x48\x81\xEC
</pre>
</td><td>
<pre>
48 8B C4 48 89 48 ? 55 48 81 EC
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x53\x31\xDB\x48\x83\xEC
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 53 31 DB 48 83 EC
</pre>
</td></tr></table>

### IsLastRoundBeforeHalfTime

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\xBA\x2A\x2A\x2A\x2A\x48\x8D\x0D\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x75\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x40\x2A\x80\x38\x2A\x0F\x84\x2A\x2A\x2A\x2A\x83\xBB
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B D9 BA ? ? ? ? 48 8D 0D ? ? ? ? E8 ? ? ? ? 48 85 C0 75 ? 48 8B 05 ? ? ? ? 48 8B 40 ? 80 38 ? 0F 84 ? ? ? ? 83 BB
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x74
</pre>
</td><td>
<pre>
55 BE ? ? ? ? 48 89 E5 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC ? E8 ? ? ? ? 48 85 C0 74
</pre>
</td></tr></table>

### AreTeamsPlayingSwitchedSides

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x8B\x81\x2A\x2A\x2A\x2A\x48\x8B\xD9\x8B\x91
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 8B 81 ? ? ? ? 48 8B D9 8B 91
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x8B\x87
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 8B 87
</pre>
</td></tr></table>

