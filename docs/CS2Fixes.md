# CS2Fixes 

Last updated: 2024-10-03T00:47:43.030Z

## Signatures

Repository: https://github.com/Source2ZE/CS2Fixes

### UTIL_SayTextFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x45\x33\xFF\x48\x89\x4D\x2A\x49\x8B\xF8
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 45 33 FF 48 89 4D ? 49 8B F8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x49\x89\xD7\x31\xD2
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 49 89 D7 31 D2
</pre>
</td></tr></table>

### UTIL_SayText2Filter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x45\x33\xFF\x48\x89\x4D\x2A\x41\x0F\xB6\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 45 33 FF 48 89 4D ? 41 0F B6 F0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x4C\x8D\x7D\x80
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 4C 8D 7D 80
</pre>
</td></tr></table>

### IsHearingClient

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>engine</td><td>
<pre>
\x40\x53\x48\x83\xEC\x20\x48\x8B\xD9\x3B\x51\x48
</pre>
</td><td>
<pre>
40 53 48 83 EC 20 48 8B D9 3B 51 48
</pre>
</td></tr><tr><td>❓</td><td>Linux</td><td>engine</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x08\x3B\x77\x58
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 53 48 89 FB 48 83 EC 08 3B 77 58
</pre>
</td></tr></table>

### TriggerPush_Touch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x55\x48\x8D\xAC\x24\x40\xE0\xFF\xFF
</pre>
</td><td>
<pre>
48 89 74 24 18 48 89 7C 24 20 55 48 8D AC 24 40 E0 FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 81 EC ? ? ? ? E8 ? ? ? ? 84 C0 74 ?
</pre>
</td></tr></table>

### TriggerTeleport_StartTouch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x20\x57\x48\x81\xEC\x2A\x00\x00\x00\x48\x8B\x01
</pre>
</td><td>
<pre>
48 89 5C 24 20 57 48 81 EC ? 00 00 00 48 8B 01
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x00\x00\x00\x48\x8B\x07
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 81 EC ? 00 00 00 48 8B 07
</pre>
</td></tr></table>

### SetGroundEntity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x48\x89\x74\x24\x20\x57\x41\x56\x41\x57\x48\x83\xEC\x20\x33\xED
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 48 89 74 24 20 57 41 56 41 57 48 83 EC 20 33 ED
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xD6\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x18\x8B\x97\xB4\x06\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 D6 41 55 49 89 F5 41 54 49 89 FC 53 48 83 EC 18 8B 97 B4 06 00 00
</pre>
</td></tr></table>

### ServerMovementUnlock

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x76\x2A\xF2\x0F\x10\x57\x2A\x0F\x28\x2A\xF3\x0F\x2A\x2A\x0F\x28\x2A
</pre>
</td><td>
<pre>
76 ? F2 0F 10 57 ? 0F 28 ? F3 0F ? ? 0F 28 ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\x87\x2A\x2A\x2A\x2A\x49\x8B\x7C\x24\x2A\xE8\x2A\x2A\x2A\x2A\x66\x0F\xEF\xED\x66\x0F\xD6\x85
</pre>
</td><td>
<pre>
0F 87 ? ? ? ? 49 8B 7C 24 ? E8 ? ? ? ? 66 0F EF ED 66 0F D6 85
</pre>
</td></tr></table>

### ClientMovementUnlock

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>client</td><td>
<pre>
\x76\x2A\xF2\x0F\x10\x57\x2A\x0F\x28\x2A\xF3\x0F\x2A\x2A\x0F\x28\x2A
</pre>
</td><td>
<pre>
76 ? F2 0F 10 57 ? 0F 28 ? F3 0F ? ? 0F 28 ?
</pre>
</td></tr><tr><td>❓</td><td>Linux</td><td>client</td><td>
<pre>
\x0F\x87\x2A\x2A\x2A\x2A\x49\x8B\x7D\x30\xE8\x2A\x2A\x2A\x2A\x66\x0F\xEF\xED\x66\x0F\xD6\x85\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
0F 87 ? ? ? ? 49 8B 7D 30 E8 ? ? ? ? 66 0F EF ED 66 0F D6 85 ? ? ? ?
</pre>
</td></tr></table>

### HammerNoCustomerMachine

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>hammer</td><td>
<pre>
\xFF\x15\x2A\x2A\x2A\x2A\x84\xC0\x0F\x85\x2A\x2A\x2A\x2A\xB9
</pre>
</td><td>
<pre>
FF 15 ? ? ? ? 84 C0 0F 85 ? ? ? ? B9
</pre>
</td></tr></table>

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

### CheckJumpButtonWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xC8\x42\xEB\x2A\x48\x8B\x4B\x30
</pre>
</td><td>
<pre>
C8 42 EB ? 48 8B 4B 30
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\xC8\x42\x66\x0F\xEF\xE4\x0F\x2F\x63\x5C
</pre>
</td><td>
<pre>
C8 42 66 0F EF E4 0F 2F 63 5C
</pre>
</td></tr></table>

### WaterLevelGravity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x3C\x01\x49\x8B\x5B\x10\x49\x8B\x7B\x18\x0F\x97\xC0\x41\x0F\x28
</pre>
</td><td>
<pre>
3C 01 49 8B 5B 10 49 8B 7B 18 0F 97 C0 41 0F 28
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x3C\x01\x0F\x97\xC0\x48\x81\xC4\x50\x01
</pre>
</td><td>
<pre>
3C 01 0F 97 C0 48 81 C4 50 01
</pre>
</td></tr></table>

### CategorizeUnderwater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x75\x2A\xB3\x01\xEB\x2A\x32\xDB\x45\x32\x2A
</pre>
</td><td>
<pre>
75 ? B3 01 EB ? 32 DB 45 32 ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\x45\xC2\x4D\x85\xC0\x0F\x95\xC2\x20\xC2
</pre>
</td><td>
<pre>
0F 45 C2 4D 85 C0 0F 95 C2 20 C2
</pre>
</td></tr></table>

### UTIL_Remove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x85\xC9\x74\x2A\x48\x8B\xD1\x48\x8B\x0D\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 85 C9 74 ? 48 8B D1 48 8B 0D ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x89\xFE\x48\x85\xFF\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48
</pre>
</td><td>
<pre>
48 89 FE 48 85 FF 74 ? 48 8D 05 ? ? ? ? 48
</pre>
</td></tr></table>

### CEntitySystem_AddEntityIOEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x18\x57\x48\x83\xEC\x40\x49\x8B\xF1
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 18 57 48 83 EC 40 49 8B F1
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x41\xBA\xFF\xFF\xFF\xFF
</pre>
</td><td>
<pre>
55 41 BA FF FF FF FF
</pre>
</td></tr></table>

### CEntityInstance_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x83\xEC\x40\x49\x8B\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 57 48 83 EC 40 49 8B F0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x48\x8D\x7D\xC0
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 48 8D 7D C0
</pre>
</td></tr></table>

### CEntityIdentity_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x54\x24\x10\x48\x89\x4C\x24\x08\x55\x53\x56\x57\x41\x55\x41\x56
</pre>
</td><td>
<pre>
48 89 54 24 10 48 89 4C 24 08 55 53 56 57 41 55 41 56
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD\xD0\xFE\xFF\xFF\x49\x89\xD6\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xCC
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 4C 8D BD D0 FE FF FF 49 89 D6 41 55 49 89 F5 41 54 49 89 CC
</pre>
</td></tr></table>

### CGameEntitySystem_FindEntityByClassName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x68\x45\x33\xC9
</pre>
</td><td>
<pre>
48 83 EC 68 45 33 C9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x45\x31\xC0\x31\xC9\x48\x89\xE5\x41\x54
</pre>
</td><td>
<pre>
55 45 31 C0 31 C9 48 89 E5 41 54
</pre>
</td></tr></table>

### CGameEntitySystem_FindEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x81\xEC\x88\x2A\x2A\x2A\x4D\x85\xC0
</pre>
</td><td>
<pre>
48 81 EC 88 ? ? ? 4D 85 C0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xD2\x74\x2A\x55\x48\x89\xE5\x41\x54
</pre>
</td><td>
<pre>
48 85 D2 74 ? 55 48 89 E5 41 54
</pre>
</td></tr></table>

### CBaseEntity_TakeDamageOld

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x20\x57\x48\x83\xEC\x60\x48\x8B\x41\x10
</pre>
</td><td>
<pre>
48 89 74 24 20 57 48 83 EC 60 48 8B 41 10
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x48\x4C\x8D\x2D\x2A\x2A\x2A\x2A\x49\x8B\x7D\x00\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 83 EC 48 4C 8D 2D ? ? ? ? 49 8B 7D 00 48 85 FF 0F 84 ? ? ? ?
</pre>
</td></tr></table>

### IGameSystem_InitAllSystems_pFirst

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\x1D\x2A\x2A\x2A\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\xBE\x2A\x2A\x2A\x2A\x0F\x1F\x00\x48\x8B\x7B\x10
</pre>
</td><td>
<pre>
48 8B 1D ? ? ? ? 48 85 DB 0F 84 ? ? ? ? BE ? ? ? ? 0F 1F 00 48 8B 7B 10
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x4C\x8B\x35\x2A\x2A\x2A\x2A\x4D\x85\xF6\x75\x2D\xE9\x2A\x2A\x2A\x2A\x0F\x1F\x40\x00\x48\x8B\x05
</pre>
</td><td>
<pre>
4C 8B 35 ? ? ? ? 4D 85 F6 75 2D E9 ? ? ? ? 0F 1F 40 00 48 8B 05
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

### CNavMesh_GetNearestNavArea

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24 ? ? ? ?
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xCE\x41\x55\x49\x89\xFD\x41\x54\x48\x8D\x3D\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 CE 41 55 49 89 FD 41 54 48 8D 3D ? ? ? ?
</pre>
</td></tr></table>

### CBaseModelEntity_SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x7C\x24\x2A\x55\x48\x8B\xEC\x48\x83\xEC\x50\x48\x8B\xF9\x4C\x8B\xC2
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 7C 24 ? 55 48 8B EC 48 83 EC 50 48 8B F9 4C 8B C2
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x41\x54\x49\x89\xFC\x48\x8D\x7D\xE0\x48\x83\xEC\x18\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x30\x48\x8B\x06
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 41 54 49 89 FC 48 8D 7D E0 48 83 EC 18 48 8D 05 ? ? ? ? 48 8B 30 48 8B 06
</pre>
</td></tr></table>

### CGameRules_TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x56
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 56
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x88\x00\x00\x00\x48\x8D\x05\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC 88 00 00 00 48 8D 05 ? ? ? ?
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices_CanUse

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x56\x57\x41\x56\x48\x83\xEC\x30\x48\x8B\x01
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 56 57 41 56 48 83 EC 30 48 8B 01
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x55\x49\x89\xFD\x41\x54\x49\x89\xF4
</pre>
</td><td>
<pre>
55 48 8D 15 ? ? ? ? 48 89 E5 41 55 49 89 FD 41 54 49 89 F4
</pre>
</td></tr></table>

### CreateEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x48\xC6\x44\x24\x30\x00
</pre>
</td><td>
<pre>
48 83 EC 48 C6 44 24 30 00
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8D\x05\x2A\x2A\x2A\x2A\x55\x48\x89\xFA
</pre>
</td><td>
<pre>
48 8D 05 ? ? ? ? 55 48 89 FA
</pre>
</td></tr></table>

### DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x30\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 30 48 8B DA 48 8B F9 48 85 C9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x56
</pre>
</td><td>
<pre>
48 85 FF 74 ? 55 48 89 E5 41 56
</pre>
</td></tr></table>

### CEntityIdentity_SetEntityName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x20\x48\x8B\xD9\x4C\x8B\xC2
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 20 48 8B D9 4C 8B C2
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x41\x54\x49\x89\xFC\x48\x8D\x7D\xE0\x48\x83\xEC\x18\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x30\xE8\x2A\x2A\x2A\x2A\x48\x8B\x45\xE0
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 41 54 49 89 FC 48 8D 7D E0 48 83 EC 18 48 8D 05 ? ? ? ? 48 8B 30 E8 ? ? ? ? 48 8B 45 E0
</pre>
</td></tr></table>

### BotNavIgnore

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x00\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x00\x74\x15
</pre>
</td><td>
<pre>
0F 84 ? ? ? ? 80 B8 ? ? ? ? 00 0F 84 ? ? ? ? 80 3D ? ? ? ? 00 74 15
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xC0\x74\x2E\x80\xB8\x2A\x2A\x2A\x2A\x00\x74\x25
</pre>
</td><td>
<pre>
48 85 C0 74 2E 80 B8 ? ? ? ? 00 74 25
</pre>
</td></tr></table>

### CBaseEntity_EmitSoundParams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x10\x48\x89\x70\x18\x55\x57\x41\x56\x48\x8D\xA8\x08\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 10 48 89 70 18 55 57 41 56 48 8D A8 08 FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 48 89 E5 41 55 41 54 49 89 FC 53 48 89 F3
</pre>
</td></tr></table>

### CBaseEntity_SetParent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4D\x8B\xD9\x48\x85\xD2\x74\x2A
</pre>
</td><td>
<pre>
4D 8B D9 48 85 D2 74 ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x74\x2A\x48\x8B\x47\x10\xF6\x40\x31\x02\x75\x2A\x48\x8B\x46\x10\xF6\x40\x31\x02\x75\x2A\xB8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 85 F6 74 ? 48 8B 47 10 F6 40 31 02 75 ? 48 8B 46 10 F6 40 31 02 75 ? B8 ? ? ? ?
</pre>
</td></tr></table>

### GetParticleSystemIndex

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x57\x48\x81\xEC\x00\x01\x00\x00\x48\x8B\xF2\x48\x8B\xF9
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 57 48 81 EC 00 01 00 00 48 8B F2 48 8B F9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x48\x81\xEC\xE0\x00\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 48 81 EC E0 00 00 00
</pre>
</td></tr></table>

### DispatchParticleEffect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x48\x89\x7C\x24\x18\x4C\x89\x74\x24\x20\x55\x48\x8D\x6C\x24\xD1
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 48 89 7C 24 18 4C 89 74 24 20 55 48 8D 6C 24 D1
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x45\x89\xCD\x41\x54\x49\x89\xD4\x53\x89\xCB\x48\x81\xEC\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 45 89 CD 41 54 49 89 D4 53 89 CB 48 81 EC ? ? ? ?
</pre>
</td></tr></table>

### CBaseEntity_EmitSoundFilter

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

### CNetworkStringTable_DeleteAllStrings

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>engine</td><td>
<pre>
\x40\x53\x57\x41\x57\x48\x83\xEC\x2A\x45\x33\xFF
</pre>
</td><td>
<pre>
40 53 57 41 57 48 83 EC ? 45 33 FF
</pre>
</td></tr><tr><td>❓</td><td>Linux</td><td>engine</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x28\x48\x8B\x87\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC 28 48 8B 87 ? ? ? ?
</pre>
</td></tr></table>

### ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x81\xEC\xC8\x00\x00\x00
</pre>
</td><td>
<pre>
40 56 57 48 81 EC C8 00 00 00
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x38\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 83 EC 38 48 8B 7F 30
</pre>
</td></tr></table>

### CBaseEntity_SetMoveType

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x0F\xB6\x81
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 0F B6 81
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x08
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 89 D5 41 54 49 89 FC 53 48 83 EC 08
</pre>
</td></tr></table>

### CPhysBox_Use

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\x47\x08\x48\x8D\x8B\x2A\x2A\x2A\x2A\x48\x8B\x17\x4C\x8D\x4C\x24\x2A
</pre>
</td><td>
<pre>
4C 8B 47 08 48 8D 8B ? ? ? ? 48 8B 17 4C 8D 4C 24 ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x49\x8B\x54\x24\x08\x48\x8D\x4D\xE0\x48\xC7\x45\x2A\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
49 8B 54 24 08 48 8D 4D E0 48 C7 45 ? ? ? ? ?
</pre>
</td></tr></table>

### CTakeDamageInfo

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x60\x48\xC7\x41\x38\xFF\xFF\xFF\xFF
</pre>
</td><td>
<pre>
40 53 48 83 EC 60 48 C7 41 38 FF FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x48\x83\xEC\x10\x4C\x8D\x15\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 48 83 EC 10 4C 8D 15 ? ? ? ?
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

### CGamePlayerEquip_InputTriggerForAllPlayers

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x55\x41\x56\x48\x83\xEC\x30\x48\x8B\xE9
</pre>
</td><td>
<pre>
40 53 55 41 56 48 83 EC 30 48 8B E9
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\xC7\x45\x2A\x2A\x2A\x2A\x2A\x89\xC7\x66\x89\x45\x2A\x66\x83\xF8\x2A\x0F\x84\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x0F\xB7\x7D\x2A\x48\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x89\xC7\x49\x89\xC5\xE8\x2A\x2A\x2A\x2A\x48\x8D\x7D\x2A\x4C\x89\xEA\x48\x89\xC6\xE8\x2A\x2A\x2A\x2A\x0F\xB7\x7D\x2A\x84\xC0\x0F\x84\x2A\x2A\x2A\x2A\x0F\x1F\x44\x2A\x2A\x66\x89\x7D\x2A\x4C\x8D\x6D
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 FC 53 48 83 EC ? E8 ? ? ? ? C7 45 ? ? ? ? ? 89 C7 66 89 45 ? 66 83 F8 ? 0F 84 ? ? ? ? E8 ? ? ? ? 0F B7 7D ? 48 85 C0 0F 84 ? ? ? ? E8 ? ? ? ? 48 89 C7 49 89 C5 E8 ? ? ? ? 48 8D 7D ? 4C 89 EA 48 89 C6 E8 ? ? ? ? 0F B7 7D ? 84 C0 0F 84 ? ? ? ? 0F 1F 44 ? ? 66 89 7D ? 4C 8D 6D
</pre>
</td></tr></table>

### CGamePlayerEquip_InputTriggerForActivatedPlayer

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x56\x48\x83\xEC\x20\x48\x8B\x1A
</pre>
</td><td>
<pre>
48 89 5C 24 18 56 48 83 EC 20 48 8B 1A
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x48\x83\xEC\x10\x4C\x8B\x26\x4D\x85\xE4\x74\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 48 83 EC 10 4C 8B 26 4D 85 E4 74 ?
</pre>
</td></tr></table>

### GetFreeClient

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>engine</td><td>
<pre>
\x40\x53\x57\x41\x55\x41\x56
</pre>
</td><td>
<pre>
40 53 57 41 55 41 56
</pre>
</td></tr><tr><td>❓</td><td>Linux</td><td>engine</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xCF\x41\x56\x41\x89\xD6\x41\x55\x4D\x89\xCD
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 CF 41 56 41 89 D6 41 55 4D 89 CD
</pre>
</td></tr></table>

### CCSPlayerPawn_GetMaxSpeed

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x57\x48\x83\xEC\x30\x48\x8B\xD9\xE8\x2A\x2A\x2A\x2A\x84\xC0
</pre>
</td><td>
<pre>
48 89 5C 24 18 57 48 83 EC 30 48 8B D9 E8 ? ? ? ? 84 C0
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

