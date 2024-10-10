# cs2kz-metamod 

Last updated: October 10, 2024 at 11:58:06 PM UTC

* Repository: https://github.com/KZGlobalTeam/cs2kz-metamod
* Gamedata: https://github.com/KZGlobalTeam/cs2kz-metamod/blob/dev/gamedata/cs2kz-core.games.txt

## Signatures

### CCSPlayerController_SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9\x8B\xF2\x8B\xCA
</pre>
</td><td>
<pre>
40 56 57 48 81 EC ? ? ? ? 48 8B F9 8B F2 8B CA
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xFD\x89\xF7
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 FD 89 F7
</pre>
</td></tr></table>

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x2A\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\xF9
</pre>
</td><td>
<pre>
48 89 74 24 ? 55 41 54 41 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B F9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x45\x89\xC4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 45 89 C4
</pre>
</td></tr></table>

### GetLegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x85\xC9\x74
</pre>
</td><td>
<pre>
48 8B 15 ? ? ? ? 48 85 D2 74 ? 85 C9 74
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x85\xFF
</pre>
</td><td>
<pre>
48 8B 05 ? ? ? ? 48 85 C0 74 ? 85 FF
</pre>
</td></tr></table>

### RecvServerBrowserPacket

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>steamnetworkingsockets</td><td>
<pre>
\x48\x89\x6C\x24\x18\x56\x48\x83\xEC\x20\x48\x8B\xF1\x48\x8B\xEA
</pre>
</td><td>
<pre>
48 89 6C 24 18 56 48 83 EC 20 48 8B F1 48 8B EA
</pre>
</td></tr><tr><td>❓</td><td>Linux</td><td>steamnetworkingsockets</td><td>
<pre>
\x41\x54\x55\x48\x89\xF5\x53\x48\x89\xFB\x48\x63\x47\x08
</pre>
</td><td>
<pre>
41 54 55 48 89 F5 53 48 89 FB 48 63 47 08
</pre>
</td></tr></table>

### SnapViewAngles

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x7C\x24\x10\x55\x48\x8D\x6C\x24\xA9\x48\x81\xEC\xC0\x00\x00\x00\x41\xB9\xFF\xFF\xFF\xFF\x48\x8B\xDA\x48\x8B\xF9\x48\x8D\x55\x17\x48\x8D\x4D\x27\x45\x8D\x41\x11\xE8\x2A\x2A\x2A\x2A\x48\x8B\xD3\x48\x8D\x4D\x27\xE8\x2A\x2A\x2A\x2A\x41\xB9\xFF\xFF\xFF\xFF\x48\x8D\x55\x17\x48\x8D\x4D\xC7\x45\x8D\x41\x11\xE8\x2A\x2A\x2A\x2A\x48\x8D\x55\xB7\x48\x8D\x4D\xC7\xE8\x2A\x2A\x2A\x2A\xF2\x0F\x10\x87\x24\x0B\x00\x00
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 7C 24 10 55 48 8D 6C 24 A9 48 81 EC C0 00 00 00 41 B9 FF FF FF FF 48 8B DA 48 8B F9 48 8D 55 17 48 8D 4D 27 45 8D 41 11 E8 ? ? ? ? 48 8B D3 48 8D 4D 27 E8 ? ? ? ? 41 B9 FF FF FF FF 48 8D 55 17 48 8D 4D C7 45 8D 41 11 E8 ? ? ? ? 48 8D 55 B7 48 8D 4D C7 E8 ? ? ? ? F2 0F 10 87 24 0B 00 00
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x48\x89\xF7\x53\x48\x83\xEC\x60\xE8\x2A\x2A\x2A\x2A\x49\x8B\x94\x24\x2C\x0E\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 FC 48 89 F7 53 48 83 EC 60 E8 ? ? ? ? 49 8B 94 24 2C 0E 00 00
</pre>
</td></tr></table>

### InitPlayerMovementTraceFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x20\x0F\xB6\x41\x37\x48
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 57 48 83 EC 20 0F B6 41 37 48
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xB8\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x66\x89\x47\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x88\x4F\x2A\x48\x89\x07\x0F\xB7\x47\x2A\x48\x89\x57\x2A\x48\xC7\x47\x2A\x2A\x2A\x2A\x2A\x48\xC7\x47\x2A\x2A\x2A\x2A\x2A\x66\x25\x2A\x2A\x48\xC7\x47\x2A\x2A\x2A\x2A\x2A\x83\xC8\x2A\x48\xC7\x47\x2A\x2A\x2A\x2A\x2A\xC7\x47\x2A\x2A\x2A\x2A\x2A\x66\x89\x47\x2A\x48\x89\xF7\xE8\x2A\x2A\x2A\x2A\x31
</pre>
</td><td>
<pre>
55 B8 ? ? ? ? 48 89 E5 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 66 89 47 ? 48 8D 05 ? ? ? ? 88 4F ? 48 89 07 0F B7 47 ? 48 89 57 ? 48 C7 47 ? ? ? ? ? 48 C7 47 ? ? ? ? ? 66 25 ? ? 48 C7 47 ? ? ? ? ? 83 C8 ? 48 C7 47 ? ? ? ? ? C7 47 ? ? ? ? ? 66 89 47 ? 48 89 F7 E8 ? ? ? ? 31
</pre>
</td></tr></table>

### InitGameTrace

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x20\x48\x8B\xD9\x33\xFF\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x85\xC9
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC 20 48 8B D9 33 FF 48 8B 0D ? ? ? ? 48 85 C9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\xA8\x00\x00\x00\x4C\x8B\x25\x2A\x2A\x2A\x2A\x4D\x85\xE4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 81 EC A8 00 00 00 4C 8B 25 ? ? ? ? 4D 85 E4
</pre>
</td></tr></table>

### TracePlayerBBox

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x40\x18\x55\x53\x57\x41\x55\x41\x56
</pre>
</td><td>
<pre>
48 8B C4 4C 89 40 18 55 53 57 41 55 41 56
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x49\x89\xF6\x41\x55\x49\x89\xCD
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 49 89 F6 41 55 49 89 CD
</pre>
</td></tr></table>

### TraceShape

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x48\x89\x4C\x24\x08\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24\x20\xE0\xFF\xFF
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 48 89 7C 24 20 48 89 4C 24 08 55 41 54 41 55 41 56 41 57 48 8D AC 24 20 E0 FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xCE\x41\x55\x4D\x89\xC5\x41\x54\x49\x89\xD4\x53\x4C\x89\xCB
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 CE 41 55 4D 89 C5 41 54 49 89 D4 53 4C 89 CB
</pre>
</td></tr></table>

### GetMaxSpeed

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xD9\xE8\x2A\x2A\x2A\x2A\x84\xC0\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x0D
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B D9 E8 ? ? ? ? 84 C0 0F 84 ? ? ? ? 48 8B 0D
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x4C\x8D\x25\x2A\x2A\x2A\x2A\x49\x8B\x3C\x24\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 53 48 89 FB 48 83 EC ? 4C 8D 25 ? ? ? ? 49 8B 3C 24 E8
</pre>
</td></tr></table>

### SetupMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x56\x57\x41\x56\x48\x83\xEC\x30\x49\x8B\xD8
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 56 57 41 56 48 83 EC 30 49 8B D8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x18\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 D4 53 48 89 FB 48 83 EC 18 E8
</pre>
</td></tr></table>

### ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\x49
</pre>
</td><td>
<pre>
40 56 57 48 81 EC ? ? ? ? 4C 8B 49
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x38\x48\x8B\x7F
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 83 EC 38 48 8B 7F
</pre>
</td></tr></table>

### PlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x48\x89\x74\x24\x20\x57\x48\x83\xEC\x30\x48\x8B\xF9
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 48 89 74 24 20 57 48 83 EC 30 48 8B F9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x48\x8B\x7F\x30\x48\x8B\x07
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 F5 41 54 49 89 FC 48 8B 7F 30 48 8B 07
</pre>
</td></tr></table>

### CheckParameters

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x20\x55\x56\x57\x41\x56\x41\x57\x48\x8D\x68\xA1
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 20 55 56 57 41 56 41 57 48 8D 68 A1
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x30\xE8\x2A\x2A\x2A\x2A\x49\x8B
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC 30 E8 ? ? ? ? 49 8B
</pre>
</td></tr></table>

### CanMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x30\x48\x8B\xD9\xBA\xFF\xFF\xFF\xFF\x48\x8D\x0D\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x75\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x40\x08\x80\x38\x00\x0F\x85
</pre>
</td><td>
<pre>
40 53 48 83 EC 30 48 8B D9 BA FF FF FF FF 48 8D 0D ? ? ? ? E8 ? ? ? ? 48 85 C0 75 ? 48 8B 05 ? ? ? ? 48 8B 40 08 80 38 00 0F 85
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xBE\xFF\xFF\xFF\xFF\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x84\xCE
</pre>
</td><td>
<pre>
55 BE FF FF FF FF 48 89 E5 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC ? E8 ? ? ? ? 48 85 C0 0F 84 CE
</pre>
</td></tr></table>

### FullWalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x83\xEC\x38\x48\x8B\xF2
</pre>
</td><td>
<pre>
40 56 57 48 83 EC 38 48 8B F2
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x20\x84\xD2
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 83 EC 20 84 D2
</pre>
</td></tr></table>

### MoveInit

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x60\x48\x8B\xFA\x48\x8B\xD9\xE8
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 60 48 8B FA 48 8B D9 E8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x48\x89\xF7\x53\x48\x83\xEC\x10
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 49 89 F5 41 54 49 89 FC 48 89 F7 53 48 83 EC 10
</pre>
</td></tr></table>

### CheckWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x08\x48\x89\x78\x10\x55\x48\x8D\x68\x98
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 08 48 89 78 10 55 48 8D 68 98
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 F4 53 48 89 FB 48 81 EC ? ? ? ? 48
</pre>
</td></tr></table>

### WaterMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x08\x48\x89\x70\x10\x48\x89\x78\x18\x55\x41\x56\x41\x57\x48\x8D\xA8\xC8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 08 48 89 70 10 48 89 78 18 55 41 56 41 57 48 8D A8 C8 FE FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x00\x00\x00\x00\xFF\xFF\xFF\xFF\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x10\xFF\xFF\xFF\x41\x54\x49\x89\xFC\x4C\x89\xEF\x53\x48\x89\xF3\x48\x81\xEC\xD8\x01\x00\x00
</pre>
</td><td>
<pre>
48 B8 00 00 00 00 FF FF FF FF 55 48 89 E5 41 57 41 56 41 55 4C 8D AD 10 FF FF FF 41 54 49 89 FC 4C 89 EF 53 48 89 F3 48 81 EC D8 01 00 00
</pre>
</td></tr></table>

### CheckVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x40\x18\x48\x89\x50\x10\x55\x53\x56
</pre>
</td><td>
<pre>
48 8B C4 4C 89 40 18 48 89 50 10 55 53 56
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x83\xEC\x58
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 49 89 F4 53 48 83 EC 58
</pre>
</td></tr></table>

### Duck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\xA8\xC8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 55 53 56 57 41 56 41 57 48 8D A8 C8 FE FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x45\x31\xED\x41\x54\x49\x89\xF4\x53\x48\x81\xEC\x78\x01\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 45 31 ED 41 54 49 89 F4 53 48 81 EC 78 01 00 00
</pre>
</td></tr></table>

### CanUnduck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x41\x54\x41\x56\x48\x8D\xAC\x24\x30\xFF\xFF\xFF
</pre>
</td><td>
<pre>
40 55 41 54 41 56 48 8D AC 24 30 FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x10\xFF\xFF\xFF\x41\x54\x49\x89\xFC\x4C\x89\xEF\x53\x48\x89\xF3\x48\x81\xEC\x58\x01\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 4C 8D AD 10 FF FF FF 41 54 49 89 FC 4C 89 EF 53 48 89 F3 48 81 EC 58 01 00 00
</pre>
</td></tr></table>

### LadderMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x41\x56\x48\x8D\xAC\x24\xD8\xFC\xFF\xFF
</pre>
</td><td>
<pre>
40 55 56 57 41 56 48 8D AC 24 D8 FC FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x00\x00\x00\x00\xFF\xFF\xFF\xFF\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x90
</pre>
</td><td>
<pre>
48 B8 00 00 00 00 FF FF FF FF 55 48 89 E5 41 57 41 56 41 55 4C 8D AD 90
</pre>
</td></tr></table>

### CheckJumpButton

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x56\x48\x83\xEC\x40\x48\x8B\xF2
</pre>
</td><td>
<pre>
48 89 5C 24 10 56 48 83 EC 40 48 8B F2
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\xBE\x2A\x2A\x2A\x2A\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 F4 BE ? ? ? ? 53 48 89 FB 48 83 EC ? E8
</pre>
</td></tr></table>

### OnJump

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x57\x48\x81\xEC\xB8\x00\x00\x00
</pre>
</td><td>
<pre>
40 53 57 48 81 EC B8 00 00 00
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x28\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 83 EC 28 48 8B 7F 30
</pre>
</td></tr></table>

### AirMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x56\x41\x57\x48\x8D\xA8\x28\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 55 56 41 57 48 8D A8 28 FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\x75\x80
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 4C 8D 75 80
</pre>
</td></tr></table>

### AirAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\xF3\x0F\x11\x5C\x24\x20
</pre>
</td><td>
<pre>
48 89 5C 24 18 F3 0F 11 5C 24 20
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xD2\x48\x89\xE5\x41\x55\x49
</pre>
</td><td>
<pre>
55 66 0F EF D2 48 89 E5 41 55 49
</pre>
</td></tr></table>

### Friction

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x56\x48\x83\xEC\x60\x48\x8B\x41\x30
</pre>
</td><td>
<pre>
48 89 5C 24 10 56 48 83 EC 60 48 8B 41 30
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x10\x48\x8B\x47\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC 10 48 8B 47 30
</pre>
</td></tr></table>

### WalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x18\x48\x89\x70\x20\x55\x57\x41\x54\x48\x8D
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 18 48 89 70 20 55 57 41 54 48 8D
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD\xAC\xFD\xFF\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 4C 8D BD AC FD FF FF
</pre>
</td></tr></table>

### TryPlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x20\x4C\x89\x40\x18\x48\x89\x50\x10\x48\x89\x48\x08\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\xE8\xFD\xFF\xFF\x48\x81\xEC\xD8\x02\x00\x00\x0F\x29\x70\xA8\x45\x33\xE4
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 20 4C 89 40 18 48 89 50 10 48 89 48 08 55 53 56 57 41 54 41 55 41 56 41 57 48 8D A8 E8 FD FF FF 48 81 EC D8 02 00 00 0F 29 70 A8 45 33 E4
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x00\x00\x00\x00\xFF\xFF\xFF\xFF\x55\x66\x0F\xEF\xC0
</pre>
</td><td>
<pre>
48 B8 00 00 00 00 FF FF FF FF 55 66 0F EF C0
</pre>
</td></tr></table>

### CategorizePosition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x41\x54\x48\x8D\xAC\x24\x28\xFE\xFF\xFF
</pre>
</td><td>
<pre>
40 55 56 57 41 54 48 8D AC 24 28 FE FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x00\x00\x00\x00\xFF\xFF\xFF\xFF\x55\x48\x89\xE5\x41\x57\x41\x89\xD7\x41\x56\x4C\x8D\xB5\x50\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 B8 00 00 00 00 FF FF FF FF 55 48 89 E5 41 57 41 89 D7 41 56 4C 8D B5 50 FE FF FF
</pre>
</td></tr></table>

### FinishGravity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x40\x4C\x8B\x41\x30
</pre>
</td><td>
<pre>
48 89 74 24 10 57 48 83 EC 40 4C 8B 41 30
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x57
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 57
</pre>
</td></tr></table>

### CheckFalling

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x81\xEC\x80\x00\x00\x00\xF3\x0F\x10\x81\x28\x02\x00\x00
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 81 EC 80 00 00 00 F3 0F 10 81 28 02 00 00
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xDB\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x38
</pre>
</td><td>
<pre>
55 66 0F EF DB 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC 38
</pre>
</td></tr></table>

### PostPlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\xDC\x53\x55\x48\x83\xEC\x68
</pre>
</td><td>
<pre>
4C 8B DC 53 55 48 83 EC 68
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x49\x89\xF6\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x10
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 F6 41 55 41 54 53 48 89 FB 48 83 EC 10
</pre>
</td></tr></table>

### PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x53\x56\x57\x41\x54\x48\x8D\x68\xC8
</pre>
</td><td>
<pre>
48 8B C4 55 53 56 57 41 54 48 8D 68 C8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x40\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC 40 E8 ? ? ? ?
</pre>
</td></tr></table>

### EmitSound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x56\x48\x83\xEC\x30\x48\x8B\xEA
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 56 48 83 EC 30 48 8B EA
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x49\x89\xD6\x41\x55\x41\x89\xF5\x41\x54\x48\x8D\x35\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 D6 41 55 41 89 F5 41 54 48 8D 35 ? ? ? ?
</pre>
</td></tr></table>

### ProcessUsercmds

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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

### PhysicsSimulate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x81\xEC\xC0\x00\x00\x00\x48\x8B\xD9\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
40 53 48 81 EC C0 00 00 00 48 8B D9 E8 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\xB8\x00\x00\x00\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC B8 00 00 00 E8 ? ? ? ?
</pre>
</td></tr></table>

### GameEventManager

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8D\x0D\x2A\x2A\x2A\x2A\x48\x0F\x45\xD0\x48\x8B\x05
</pre>
</td><td>
<pre>
48 8D 0D ? ? ? ? 48 0F 45 D0 48 8B 05
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8D\x3D\x2A\x2A\x2A\x2A\x4C\x89\xE0
</pre>
</td><td>
<pre>
48 8D 3D ? ? ? ? 4C 89 E0
</pre>
</td></tr></table>

