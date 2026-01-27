# cs2-css-match 

Last updated: January 27, 2026 at 12:08:18 AM UTC

* Manifests: [4550816723870619985](https://steamdb.info/depot/2347770/history/?changeid=M:4550816723870619985), [7192545732919714899](https://steamdb.info/depot/2347771/history/?changeid=M:7192545732919714899), [8521981681483882645](https://steamdb.info/depot/2347773/history/?changeid=M:8521981681483882645)
* Repository: https://github.com/ianlucas/cs2-css-match
* Gamedata: https://github.com/ianlucas/cs2-css-match/blob/main/gamedata/match.json

## Signatures

### TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xF3\x0F\x11\x85
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 11 85
</pre>
</td></tr><tr><td>✅⚠️(2)</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x56
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 56
</pre>
</td></tr></table>

### AreTeamsPlayingSwitchedSides

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x8B\x87\x2A\x2A\x2A\x2A\x8B\x97
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 8B 87 ? ? ? ? 8B 97
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x8B\x81\x2A\x2A\x2A\x2A\x48\x8B\xD9\x8B\x91
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 8B 81 ? ? ? ? 48 8B D9 8B 91
</pre>
</td></tr></table>

### ChangeTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x44\x0F\xB6\xB7\x2A\x2A\x2A\x2A\x44\x39\xF6
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 44 0F B6 B7 ? ? ? ? 44 39 F6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x53\x55\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\xB6\xA9
</pre>
</td><td>
<pre>
48 8B C4 53 55 57 48 81 EC ? ? ? ? 0F B6 A9
</pre>
</td></tr></table>

### HandleSwapTeams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x45\x31\xF6\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8D\x25
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 45 31 F6 41 55 41 54 53 48 81 EC ? ? ? ? 4C 8D 25
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x48\x2A\x41\x54\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x58
</pre>
</td><td>
<pre>
48 8B C4 48 89 48 ? 41 54 48 81 EC ? ? ? ? 48 89 58
</pre>
</td></tr></table>

### IncrementNumMVPs

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x8D\x3D\x2A\x2A\x2A\x2A\x89\xF3
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 8D 3D ? ? ? ? 89 F3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x57\x41\x57\x48\x8B\xEC\x48\x81\xEC
</pre>
</td><td>
<pre>
40 55 57 41 57 48 8B EC 48 81 EC
</pre>
</td></tr></table>

### IsLastRoundBeforeHalfTime

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x44\x0F\xBF\xA7
</pre>
</td><td>
<pre>
55 BE ? ? ? ? 48 89 E5 41 56 41 55 41 54 53 48 89 FB 44 0F BF A7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x83\xB9\x2A\x2A\x2A\x2A\x2A\x48\x8B\xD9\x0F\xBF\xB9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 83 B9 ? ? ? ? ? 48 8B D9 0F BF B9
</pre>
</td></tr></table>

### MaintainBotQuota

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x31\xF6\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x31\xFF
</pre>
</td><td>
<pre>
55 31 F6 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 31 FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\xF1\xFF\x15
</pre>
</td><td>
<pre>
40 55 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B F1 FF 15
</pre>
</td></tr></table>

