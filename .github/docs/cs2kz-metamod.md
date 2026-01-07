# cs2kz-metamod 

Last updated: January 7, 2026 at 4:36:33 PM UTC

* Manifests: [8348690621754004818](https://steamdb.info/depot/2347770/history/?changeid=M:8348690621754004818), [3970280707550781410](https://steamdb.info/depot/2347771/history/?changeid=M:3970280707550781410), [8128465550651630543](https://steamdb.info/depot/2347773/history/?changeid=M:8128465550651630543)
* Repository: https://github.com/KZGlobalTeam/cs2kz-metamod
* Gamedata: https://github.com/KZGlobalTeam/cs2kz-metamod/blob/master/gamedata/cs2kz-core.games.txt

## Signatures

### SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅⚠️(2)</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x53\x48\x89\xFB\x48\x8D\x7D\x2A\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x30\x48\x8B\x06
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 53 48 89 FB 48 8D 7D ? 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B 30 48 8B 06
</pre>
</td></tr><tr><td>✅⚠️(2)</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8D\x54\x24\x2A\x48\x8B\x01\xFF\x50\x2A\x48\x8B\x44\x24
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B D9 4C 8B C2 48 8B 0D ? ? ? ? 48 8D 54 24 ? 48 8B 01 FF 50 ? 48 8B 44 24
</pre>
</td></tr></table>

### AirAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xD5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x18\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 D5 41 54 49 89 FC 53 48 89 F3 48 83 EC 18 48 8B 7F 30
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xF3\x0F\x11\x5C\x24\x20\x53\x56\x57\x48\x83\xEC\x60
</pre>
</td><td>
<pre>
F3 0F 11 5C 24 20 53 56 57 48 83 EC 60
</pre>
</td></tr></table>

### AirMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x4C\x8D\xBD\x68\xFF\xFF\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 4C 8D BD 68 FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x20\x55\x56\x57\x48\x81\xEC\xC0\x00\x00\x00
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 20 55 56 57 48 81 EC C0 00 00 00
</pre>
</td></tr></table>

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x87\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xCE\x41\x55\x45\x89\xCD
</pre>
</td><td>
<pre>
55 48 8D 87 ? ? ? ? 48 89 E5 41 57 41 56 41 89 CE 41 55 45 89 CD
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x88\x4C\x24\x2A\x53\x57\x41\x54\x41\x56\x41\x57\x48\x83\xEC
</pre>
</td><td>
<pre>
44 88 4C 24 ? 53 57 41 54 41 56 41 57 48 83 EC
</pre>
</td></tr></table>

### CCSPlayerController_SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x89\xF7
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 FC 89 F7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xD9\x8B\xFA
</pre>
</td><td>
<pre>
40 53 57 48 81 EC ? ? ? ? 48 8B D9 8B FA
</pre>
</td></tr></table>

### CPhysicsGameSystemFrameBoundary

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8d\x05\x2A\x2A\x2A\x2A\x48\x8d\x35\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x56\x41\x55
</pre>
</td><td>
<pre>
55 48 8d 05 ? ? ? ? 48 8d 35 ? ? ? ? 48 89 E5 41 56 41 55
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\xDC\x49\x89\x5B\x08\x49\x89\x6B\x10\x49\x89\x73\x18\x57\x41\x56\x41\x57\x48\x83\xEC\x60
</pre>
</td><td>
<pre>
4C 8B DC 49 89 5B 08 49 89 6B 10 49 89 73 18 57 41 56 41 57 48 83 EC 60
</pre>
</td></tr></table>

### CanMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xBE\xFF\xFF\xFF\xFF\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x08\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x84
</pre>
</td><td>
<pre>
55 BE FF FF FF FF 48 89 E5 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC 08 E8 ? ? ? ? 48 85 C0 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x57\x48\x83\xEC\x30\x48\x8B\xF9\xBA\xFF\xFF\xFF\xFF
</pre>
</td><td>
<pre>
40 57 48 83 EC 30 48 8B F9 BA FF FF FF FF
</pre>
</td></tr></table>

### CanUnduck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x78\x01\x00\x00\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 81 EC 78 01 00 00 48 8B 7F 30
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x41\x54\x48\x8D\xAC\x24\xE0\xFE\xFF\xFF
</pre>
</td><td>
<pre>
40 55 56 41 54 48 8D AC 24 E0 FE FF FF
</pre>
</td></tr></table>

### CategorizePosition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x48\x8D\x85\x2A\x2A\x2A\x2A\x41\x55
</pre>
</td><td>
<pre>
55 66 0F EF C0 48 89 E5 41 57 41 56 48 8D 85 ? ? ? ? 41 55
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x41\x55\x48\x8D\xAC\x24\x18\xFE\xFF\xFF
</pre>
</td><td>
<pre>
40 55 56 57 41 55 48 8D AC 24 18 FE FF FF
</pre>
</td></tr></table>

### CheckFalling

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x68\x48\x8B\x7F
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC 68 48 8B 7F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x81\xEC\x80\x00\x00\x00\x48\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 81 EC 80 00 00 00 48 8B D9
</pre>
</td></tr></table>

### CheckJumpButton

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\xBE\x02\x00\x00\x00\x53\x48\x89\xFB\x48\x83\xEC\x68
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 F4 BE 02 00 00 00 53 48 89 FB 48 83 EC 68
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x55\x48\x83\xEC\x40\x48\x8B\xEA
</pre>
</td><td>
<pre>
48 89 5C 24 18 55 48 83 EC 40 48 8B EA
</pre>
</td></tr></table>

### CheckParameters

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x81\xEC\x88\x01\x00\x00\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 81 EC 88 01 00 00 E8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x20\x55\x56\x57\x41\x56\x41\x57\x48\x8D\x68\xA1\x48\x81\xEC\xC0\x00\x00\x00\x0F\xB6\x79\x50
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 20 55 56 57 41 56 41 57 48 8D 68 A1 48 81 EC C0 00 00 00 0F B6 79 50
</pre>
</td></tr></table>

### CheckVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x68\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 F7 41 56 41 55 41 54 49 89 FC 53 48 83 EC 68 48 8B 7F 30
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x40\x18\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x68\xA1
</pre>
</td><td>
<pre>
48 8B C4 4C 89 40 18 55 53 56 57 41 54 41 55 41 56 41 57 48 8D 68 A1
</pre>
</td></tr></table>

### CheckWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x68\x01\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 F5 41 54 53 48 89 FB 48 81 EC 68 01 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x08\x48\x89\x70\x10\x48\x89\x78\x18\x55\x48\x8D\xA8\x58\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 08 48 89 70 10 48 89 78 18 55 48 8D A8 58 FF FF FF
</pre>
</td></tr></table>

### CreateBot

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x81\xEC\xC8\x00\x00\x00\x89\xB5\x1C\xFF\xFF\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 81 EC C8 00 00 00 89 B5 1C FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x57\x48\x81\xEC\xB8\x00\x00\x00\x8B\xEA
</pre>
</td><td>
<pre>
40 55 57 48 81 EC B8 00 00 00 8B EA
</pre>
</td></tr></table>

### CreateEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8D\x05\x2A\x2A\x2A\x2A\x55\x48\x89\xFA
</pre>
</td><td>
<pre>
48 8D 05 ? ? ? ? 55 48 89 FA
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x48\xC6\x44\x24\x30\x00
</pre>
</td><td>
<pre>
48 83 EC 48 C6 44 24 30 00
</pre>
</td></tr></table>

### DebugDrawMesh

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x48\x01\x00\x00
</pre>
</td><td>
<pre>
55 48 89 F0 48 89 E5 41 57 41 56 41 55 41 54 53 48 81 EC 48 01 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x4C\x24\x08\x55\x53\x57\x41\x54\x41\x55\x48\x8D\xAC\x24\x40\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 89 4C 24 08 55 53 57 41 54 41 55 48 8D AC 24 40 FF FF FF
</pre>
</td></tr></table>

### DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x55\x49\x89\xFD
</pre>
</td><td>
<pre>
48 85 FF 74 ? 55 48 89 E5 41 55 49 89 FD
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x30\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 30 48 8B DA 48 8B F9 48 85 C9
</pre>
</td></tr></table>

### Duck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x88\x01\x00\x00\x48\x89\xB5
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 81 EC 88 01 00 00 48 89 B5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\xA8\xA8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 55 53 56 57 41 56 41 57 48 8D A8 A8 FE FF FF
</pre>
</td></tr></table>

### EmitSound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x89\xD8\x48\x8B\x5D\x2A\xC9\xC3\xCC\xCC\xCC\xCC\xCC\xCC\x48\xB8
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 48 89 D8 48 8B 5D ? C9 C3 CC CC CC CC CC CC 48 B8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x4C\x89\x4C\x24\x2A\x48\x8B\xD9\x45\x8B\xC8
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 4C 89 4C 24 ? 48 8B D9 45 8B C8
</pre>
</td></tr></table>

### Friction

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x38\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC 38 48 8B 7F 30
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x70\x48\x83\x79\x30\x00
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 57 48 83 EC 70 48 83 79 30 00
</pre>
</td></tr></table>

### FullWalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x58\x84\xD2
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC 58 84 D2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x83\xEC\x58\x48\x8B\xF2
</pre>
</td><td>
<pre>
40 56 57 48 83 EC 58 48 8B F2
</pre>
</td></tr></table>

### GameEventManager

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x4C\x8D\x25\x2A\x2A\x2A\x2A\x31\xDB\x48\x83\xEC\x08
</pre>
</td><td>
<pre>
4C 8D 25 ? ? ? ? 31 DB 48 83 EC 08
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8D\x0D\x2A\x2A\x2A\x2A\x49\x8B\x04\x38
</pre>
</td><td>
<pre>
48 8D 0D ? ? ? ? 49 8B 04 38
</pre>
</td></tr></table>

### GetLegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x83\xFF\x2A\x77\x2A\x48\x63\xFF\x48\xC1\xE7\x2A\x48\x8D\x44\x38
</pre>
</td><td>
<pre>
48 8B 05 ? ? ? ? 48 85 C0 74 ? 83 FF ? 77 ? 48 63 FF 48 C1 E7 ? 48 8D 44 38
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x83\xF9\x2A\x77\x2A\x48\x63\xC1\x48\xC1\xE0
</pre>
</td><td>
<pre>
48 8B 15 ? ? ? ? 48 85 D2 74 ? 83 F9 ? 77 ? 48 63 C1 48 C1 E0
</pre>
</td></tr></table>

### LadderMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x2A\x2A\x2A\x2A\x41\x54\x49\x89\xF4\x53\x48\x89\xFB
</pre>
</td><td>
<pre>
55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD ? ? ? ? 41 54 49 89 F4 53 48 89 FB
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x56\x57\x41\x57\x48\x8D\xAC\x24\x10\xFD\xFF\xFF
</pre>
</td><td>
<pre>
40 55 53 56 57 41 57 48 8D AC 24 10 FD FF FF
</pre>
</td></tr></table>

### MoveInit

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x89\xF7\x48\x83\xEC\x70
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 89 F7 48 83 EC 70
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x74\x24\x18\x57\x41\x56\x41\x57\x48\x81\xEC\xA0\x00\x00\x00
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 57 41 56 41 57 48 81 EC A0 00 00 00
</pre>
</td></tr></table>

### OnJump

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x58\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 83 EC 58 48 8B 7F 30
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x81\xEC\xE8\x00\x00\x00\x48\x83\x79\x30\x00
</pre>
</td><td>
<pre>
40 56 57 48 81 EC E8 00 00 00 48 83 79 30 00
</pre>
</td></tr></table>

### PhysicsSimulate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x00\x00\x00
</pre>
</td><td>
<pre>
55 ? ? ? ? ? ? ? ? ? ? ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 81 EC ? 00 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x56\x48\x8D\x6C\x24\xA0
</pre>
</td><td>
<pre>
40 55 53 56 48 8D 6C 24 A0
</pre>
</td></tr></table>

### PlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x8B\x7F\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x07\xFF\x90
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 F4 53 48 89 FB 48 8B 7F ? 48 85 FF 0F 84 ? ? ? ? 48 8B 07 FF 90
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x20\x57\x48\x83\xEC\x50\x48\x83\x79\x30\x00
</pre>
</td><td>
<pre>
48 89 5C 24 20 57 48 83 EC 50 48 83 79 30 00
</pre>
</td></tr></table>

### PostPlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x50\x48\x8B\x5F
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 83 EC 50 48 8B 5F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x56\x41\x56\x48\x83\xEC\x60\x48\x83\x79\x30\x00
</pre>
</td><td>
<pre>
40 53 56 41 56 48 83 EC 60 48 83 79 30 00
</pre>
</td></tr></table>

### PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\xF3\x0F\x10\x0D
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? F3 0F 10 83 ? ? ? ? F3 0F 10 0D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x2A\x2A\x55\x53\x56\x57\x41\x2A\x48\x2A\x2A\x2A\x48\x2A\x2A\x2A\x2A\x2A\x2A\x4C\x89\x68
</pre>
</td><td>
<pre>
48 ? ? 55 53 56 57 41 ? 48 ? ? ? 48 ? ? ? ? ? ? 4C 89 68
</pre>
</td></tr></table>

### ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x38\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC 38 48 8B 7F 30
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x57\x41\x57\x48\x81\xEC\xB8\x00\x00\x00
</pre>
</td><td>
<pre>
40 57 41 57 48 81 EC B8 00 00 00
</pre>
</td></tr></table>

### ProcessUsercmds

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x48\x89\x4D
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC 48 89 4D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x44\x88\x48\x20\x44\x89\x40\x18\x48\x89\x50\x10\x53
</pre>
</td><td>
<pre>
48 8B C4 44 88 48 20 44 89 40 18 48 89 50 10 53
</pre>
</td></tr></table>

### RecvServerBrowserPacket

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>steamnetworkingsockets</td><td>
<pre>
\x41\x54\x55\x48\x89\xF5\x53\x48\x89\xFB\x48\x63\x47\x08
</pre>
</td><td>
<pre>
41 54 55 48 89 F5 53 48 89 FB 48 63 47 08
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>steamnetworkingsockets</td><td>
<pre>
\x48\x89\x6C\x24\x18\x56\x48\x83\xEC\x20\x48\x8B\xF1\x48\x8B\xEA
</pre>
</td><td>
<pre>
48 89 6C 24 18 56 48 83 EC 20 48 8B F1 48 8B EA
</pre>
</td></tr></table>

### RemoveEntity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x89\xFE\x48\x85\xFF\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48
</pre>
</td><td>
<pre>
48 89 FE 48 85 FF 74 ? 48 8D 05 ? ? ? ? 48
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x85\xC9\x74\x2A\x48\x8B\xD1\x48\x8B\x0D\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 85 C9 74 ? 48 8B D1 48 8B 0D ? ? ? ?
</pre>
</td></tr></table>

### SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x78\xF3\x0F\x11\x85\x6C\xFF\xFF\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 89 F3 48 83 EC 78 F3 0F 11 85 6C FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x55\x41\x56\x48\x81\xEC\x90\x00\x00\x00
</pre>
</td><td>
<pre>
40 53 55 41 56 48 81 EC 90 00 00 00
</pre>
</td></tr></table>

### SetupMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x28\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 D4 53 48 89 FB 48 83 EC 28 E8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x48\x89\x74\x24\x20\x57\x41\x56\x41\x57\x48\x83\xEC\x20\x49\x8B\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 48 89 74 24 20 57 41 56 41 57 48 83 EC 20 49 8B F0
</pre>
</td></tr></table>

### SnapViewAngles

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x89\xF7\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x93
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 89 F7 48 81 EC ? ? ? ? E8 ? ? ? ? 48 8B 93
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x48\x89\x7C\x24\x18\x55\x48\x8D\x6C\x24\xA9\x48\x81\xEC\xC0\x00\x00\x00
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 48 89 7C 24 18 55 48 8D 6C 24 A9 48 81 EC C0 00 00 00
</pre>
</td></tr></table>

### TracePlayerBBox

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x49\x89\xCE\x41\x55\x49\x89\xD5
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 49 89 CE 41 55 49 89 D5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x89\x44\x24\x18\x55\x53\x56\x57\x41\x55\x41\x56\x48\x8D\xAC\x24\xF8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
4C 89 44 24 18 55 53 56 57 41 55 41 56 48 8D AC 24 F8 FE FF FF
</pre>
</td></tr></table>

### TraceShape

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xCF\x41\x56\x49\x89\xF6\x41\x55\x4D\x89\xC5
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 CF 41 56 49 89 F6 41 55 4D 89 C5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x20\x48\x89\x4C\x24\x08\x55\x57
</pre>
</td><td>
<pre>
48 89 5C 24 20 48 89 4C 24 08 55 57
</pre>
</td></tr></table>

### TryPlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6\x41\x55\x49\x89\xD5
</pre>
</td><td>
<pre>
55 66 0F EF C0 48 89 E5 41 57 41 56 49 89 F6 41 55 49 89 D5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x20\x4C\x89\x40\x18\x48\x89\x50\x10\x48\x89\x48\x08\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\xC8\xFD\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 20 4C 89 40 18 48 89 50 10 48 89 48 08 55 53 56 57 41 54 41 55 41 56 41 57 48 8D A8 C8 FD FF FF
</pre>
</td></tr></table>

### WalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD\xD8\xFD\xFF\xFF
</pre>
</td><td>
<pre>
55 66 0F EF C0 48 89 E5 41 57 41 56 4C 8D BD D8 FD FF FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x70\x10\x48\x89\x78\x18\x55\x41\x56
</pre>
</td><td>
<pre>
48 8B C4 48 89 70 10 48 89 78 18 55 41 56
</pre>
</td></tr></table>

### WaterMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x10\xFF\xFF\xFF\x41\x54\x49\x89\xFC\x4C\x89\xEF\x53\x48\x89\xF3\x48\x81\xEC\xC8\x01\x00\x00
</pre>
</td><td>
<pre>
55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD 10 FF FF FF 41 54 49 89 FC 4C 89 EF 53 48 89 F3 48 81 EC C8 01 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x08\x48\x89\x70\x10\x48\x89\x78\x18\x4C\x89\x60\x20\x55\x41\x56\x41\x57\x48\x8D\xA8\xD8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 08 48 89 70 10 48 89 78 18 4C 89 60 20 55 41 56 41 57 48 8D A8 D8 FE FF FF
</pre>
</td></tr></table>

