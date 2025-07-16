# cs2-inventory-simulator-plugin 

Last updated: July 16, 2025 at 12:16:30 AM UTC

* Manifests: [6486690309021291849](https://steamdb.info/depot/2347771/history/?changeid=M:6486690309021291849), [7740777009156158901](https://steamdb.info/depot/2347773/history/?changeid=M:7740777009156158901)
* Repository: https://github.com/ianlucas/cs2-inventory-simulator-plugin
* Gamedata: https://github.com/ianlucas/cs2-inventory-simulator-plugin/blob/main/gamedata/inventory-simulator.json

## Signatures

### ChangeSubclass

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x6C\x24\x2A\x56\x48\x83\xEC\x2A\x48\x8B\xEA\x48\x8B\xF1\xE8\x2A\x2A\x2A\x2A\x84\xC0\x0F\x84
</pre>
</td><td>
<pre>
48 89 6C 24 ? 56 48 83 EC ? 48 8B EA 48 8B F1 E8 ? ? ? ? 84 C0 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8D\x05
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 81 EC ? ? ? ? E8 ? ? ? ? 84 C0 74 ? 48 8D 05
</pre>
</td></tr></table>

### CAttributeList_SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x41\x56\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x74\x24
</pre>
</td><td>
<pre>
40 53 41 56 41 57 48 81 EC ? ? ? ? 0F 29 74 24
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x83\xEC\x2A\xF3\x0F\x11\x85
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 49 89 F4 53 48 83 EC ? F3 0F 11 85
</pre>
</td></tr></table>

### CBaseModelEntity_SetBodygroup

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x41\x8B\xF8\x48\x8B\xF2\x48\x8B\xD9\xE8
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 41 8B F8 48 8B F2 48 8B D9 E8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x49\x89\xF6\x41\x55\x41\x89\xD5\x41\x54\x49\x89\xFC\x48\x83\xEC
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 F6 41 55 41 89 D5 41 54 49 89 FC 48 83 EC
</pre>
</td></tr></table>

### CCSPlayerPawn_IsAbleToApplySpray

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x4C\x89\x74\x24\x2A\x55\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x49\x8B\xF1
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 4C 89 74 24 ? 55 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 49 8B F1
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x49\x89\xD5\x41\x54\x48\x8D\x95
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 49 89 D5 41 54 48 8D 95
</pre>
</td></tr></table>

### CCSPlayerController_ProcessUsercmds

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x44\x88\x48\x20\x44\x89\x40\x18\x48\x89\x50\x10\x53
</pre>
</td><td>
<pre>
48 8B C4 44 88 48 20 44 89 40 18 48 89 50 10 53
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xD6\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x38
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 D6 41 55 41 54 49 89 FC 53 48 83 EC 38
</pre>
</td></tr></table>

### CCSPlayerController_UpdateSelectTeamPreview

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x89\x54\x24\x2A\x55\x48\x81\xEC
</pre>
</td><td>
<pre>
89 54 24 ? 55 48 81 EC
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x89\x75
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 89 75
</pre>
</td></tr></table>

### CServerSideClientBase_SetSignonState

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x40\x57\x48\x83\xEC\x2A\x48\x8B\xF9\x48\x89\x74\x24
</pre>
</td><td>
<pre>
40 57 48 83 EC ? 48 8B F9 48 89 74 24
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x89\xF0\x48\x89\xE5\x41\x57\x41\x56
</pre>
</td><td>
<pre>
55 89 F0 48 89 E5 41 57 41 56
</pre>
</td></tr></table>

### CServerSideClientBase_Connect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x54\x41\x56\x41\x57\x48\x83\xEC\x2A\x4C\x8B\xBC\x24\x2A\x2A\x2A\x2A\x4D\x8B\xE0\x41\x0F\xB7\xF1\x4C\x8B\xF1\x4D\x85\xFF\x74\x2A\x49\x8B\x07\x49\x8B\xCF\xFF\x50\x2A\xBB\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\xBB\x2A\x2A\x2A\x2A\x8B\x0D\x2A\x2A\x2A\x2A\x8B\xD3\xFF\x15\x2A\x2A\x2A\x2A\x0F\xB6\xAC\x24\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x4D\x85\xFF\x74\x2A\x49\x8B\x07\x49\x8B\xCF\xFF\x50\x2A\x48\x8B\xD0\xEB\x2A\x48\x8D\x15\x2A\x2A\x2A\x2A\x8B\x0D\x2A\x2A\x2A\x2A\x4C\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x54\x24\x2A\x4D\x8B\xCC\x89\x6C\x24\x2A\x8B\xD3\x89\x74\x24\x2A\xFF\x15\x2A\x2A\x2A\x2A\x40\x84\xED\x75\x2A\x45\x33\xC0\x48\x8D\x0D\x2A\x2A\x2A\x2A\x41\x8D\x50\x2A\xE8\x2A\x2A\x2A\x2A\x49\x8B\x06\x49\x8B\xCE\x49\x8B\xBE\x2A\x2A\x2A\x2A\x49\x8B\x9E\x2A\x2A\x2A\x2A\xFF\x50\x2A\xB9\x2A\x2A\x2A\x2A\x49\x89\xBE\x2A\x2A\x2A\x2A\x49\x89\xBE\x2A\x2A\x2A\x2A\x49\x89\x9E\x2A\x2A\x2A\x2A\x66\x41\x89\xB6\x2A\x2A\x2A\x2A\xFF\x15\x2A\x2A\x2A\x2A\x33\xFF
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 54 41 56 41 57 48 83 EC ? 4C 8B BC 24 ? ? ? ? 4D 8B E0 41 0F B7 F1 4C 8B F1 4D 85 FF 74 ? 49 8B 07 49 8B CF FF 50 ? BB ? ? ? ? 84 C0 74 ? BB ? ? ? ? 8B 0D ? ? ? ? 8B D3 FF 15 ? ? ? ? 0F B6 AC 24 ? ? ? ? 84 C0 74 ? 4D 85 FF 74 ? 49 8B 07 49 8B CF FF 50 ? 48 8B D0 EB ? 48 8D 15 ? ? ? ? 8B 0D ? ? ? ? 4C 8D 05 ? ? ? ? 48 89 54 24 ? 4D 8B CC 89 6C 24 ? 8B D3 89 74 24 ? FF 15 ? ? ? ? 40 84 ED 75 ? 45 33 C0 48 8D 0D ? ? ? ? 41 8D 50 ? E8 ? ? ? ? 49 8B 06 49 8B CE 49 8B BE ? ? ? ? 49 8B 9E ? ? ? ? FF 50 ? B9 ? ? ? ? 49 89 BE ? ? ? ? 49 89 BE ? ? ? ? 49 89 9E ? ? ? ? 66 41 89 B6 ? ? ? ? FF 15 ? ? ? ? 33 FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x89\xCD
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 89 CD
</pre>
</td></tr></table>

