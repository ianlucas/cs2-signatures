# CS2 Signatures

Last updated: 2024-08-14T23:41:22.747Z

## CS2Fixes

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

### UTIL_ClientPrintAll

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x81\xEC\x70\x01\x2A\x2A\x8B\xE9
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 57 48 81 EC 70 01 ? ? 8B E9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xD7\x41\x56\x49\x89\xF6\x41\x55\x41\x89\xFD
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 D7 41 56 49 89 F6 41 55 41 89 FD
</pre>
</td></tr></table>

### ClientPrint

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x2A\x55
</pre>
</td><td>
<pre>
48 85 C9 0F 84 ? ? ? ? 48 89 5C 24 ? 55
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xCF\x41\x56\x49\x89\xD6\x41\x55\x41\x89\xF5\x41\x54\x4C\x8D\xA5\xA0\xFE\xFF\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 CF 41 56 49 89 D6 41 55 41 89 F5 41 54 4C 8D A5 A0 FE FF FF
</pre>
</td></tr></table>

### IsHearingClient

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>engine</td><td>
<pre>
\x40\x53\x48\x83\xEC\x20\x48\x8B\xD9\x3B\x51\x48
</pre>
</td><td>
<pre>
40 53 48 83 EC 20 48 8B D9 3B 51 48
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>engine</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x20\x57\x48\x81\xEC\x2A\x00\x00\x00\x48\x8B\x01
</pre>
</td><td>
<pre>
48 89 5C 24 20 57 48 81 EC ? 00 00 00 48 8B 01
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x48\x89\x74\x24\x20\x57\x41\x56\x41\x57\x48\x83\xEC\x20\x33\xED
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 48 89 74 24 20 57 41 56 41 57 48 83 EC 20 33 ED
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>client</td><td>
<pre>
\x76\x2A\xF2\x0F\x10\x57\x2A\x0F\x28\x2A\xF3\x0F\x2A\x2A\x0F\x28\x2A
</pre>
</td><td>
<pre>
76 ? F2 0F 10 57 ? 0F 28 ? F3 0F ? ? 0F 28 ?
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>client</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>hammer</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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

### CGameRules_Constructor

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x8B\x15\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x01\x33\xF6\x65\x48\x8B\x04\x25\x2A\x2A\x2A\x2A\x48\x8B\xD9\x48\x89\x71\x2A\x48\x8B\x3C\xD0\xB8\x2A\x2A\x2A\x2A\x40\x38\x34\x38\x75\x2A\xE8\x2A\x2A\x2A\x2A\xB8\x2A\x2A\x2A\x2A\x48\x8B\x04\x38\x48\x89\x43\x2A\x48\x89\x73\x2A\x48\x89\x73\x2A\x89\x73\x2A\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\x89\xB3
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 8B 15 ? ? ? ? 48 8D 05 ? ? ? ? 48 89 01 33 F6 65 48 8B 04 25 ? ? ? ? 48 8B D9 48 89 71 ? 48 8B 3C D0 B8 ? ? ? ? 40 38 34 38 75 ? E8 ? ? ? ? B8 ? ? ? ? 48 8B 04 38 48 89 43 ? 48 89 73 ? 48 89 73 ? 89 73 ? C7 43 ? ? ? ? ? 48 89 B3
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x89\x07\x66\x48\x8D\x3D\x2A\x2A\x2A\x2A\x66\x66\x48\xE8\x2A\x2A\x2A\x2A\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\xC7\x43\x2A\x2A\x2A\x2A\x2A\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\xC7\x83
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 53 48 89 FB 48 83 EC ? 48 89 07 66 48 8D 3D ? ? ? ? 66 66 48 E8 ? ? ? ? C7 43 ? ? ? ? ? 48 C7 43 ? ? ? ? ? 48 C7 43 ? ? ? ? ? C7 43 ? ? ? ? ? 48 C7 83
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x20\x57\x48\x83\xEC\x60\x48\x8B\x41\x10
</pre>
</td><td>
<pre>
48 89 74 24 20 57 48 83 EC 60 48 8B 41 10
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\x1D\x2A\x2A\x2A\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\xBE\x2A\x2A\x2A\x2A\x0F\x1F\x00\x48\x8B\x7B\x10
</pre>
</td><td>
<pre>
48 8B 1D ? ? ? ? 48 85 DB 0F 84 ? ? ? ? BE ? ? ? ? 0F 1F 00 48 8B 7B 10
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x88\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x56\x48\x8D\x6C\x24\x2A
</pre>
</td><td>
<pre>
44 88 4C 24 ? 55 56 57 41 54 41 56 48 8D 6C 24 ?
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xD6\x41\x55\x49\x89\xFD\x41\x54\x45\x89\xC4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 D6 41 55 49 89 FD 41 54 45 89 C4
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
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>engine</td><td>
<pre>
\x40\x53\x57\x41\x57\x48\x83\xEC\x2A\x45\x33\xFF
</pre>
</td><td>
<pre>
40 53 57 41 57 48 83 EC ? 45 33 FF
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>engine</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x55\x41\x56\x48\x83\xEC\x30\x48\x8B\xE9
</pre>
</td><td>
<pre>
40 53 55 41 56 48 83 EC 30 48 8B E9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
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

### CCSGameRules_GoToIntermission

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57
</pre>
</td><td>
<pre>
48 8B C4 55 53 56 57 41 56 41 57
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x31\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xF6\x41\x55\x41\x54\x49\x89\xFC\x53
</pre>
</td><td>
<pre>
55 31 C0 48 89 E5 41 57 41 56 41 89 F6 41 55 41 54 49 89 FC 53
</pre>
</td></tr></table>

### GetFreeClient

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>engine</td><td>
<pre>
\x40\x53\x57\x41\x55\x41\x56
</pre>
</td><td>
<pre>
40 53 57 41 55 41 56
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>engine</td><td>
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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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

## cs2kz-metamod

Repository: https://github.com/KZGlobalTeam/cs2kz-metamod

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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>steamnetworkingsockets</td><td>
<pre>
\x48\x89\x6C\x24\x18\x57\x48\x83\xEC\x20\x48\x8B\xF9\x48\x8B\xEA
</pre>
</td><td>
<pre>
48 89 6C 24 18 57 48 83 EC 20 48 8B F9 48 8B EA
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>steamnetworkingsockets</td><td>
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
\x40\x55\x53\x56\x41\x56\x41\x57\x48\x8D\x6C\x24\xC9
</pre>
</td><td>
<pre>
40 55 53 56 41 56 41 57 48 8D 6C 24 C9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x89\xF7\x4C
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 89 F7 4C
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
\x4C\x89\x44\x24\x18\x55\x53\x57\x41\x55\x41\x56
</pre>
</td><td>
<pre>
4C 89 44 24 18 55 53 57 41 55 41 56
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

### GetMaxSpeed

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
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

### SetupMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x56\x57\x41\x56\x48\x83\xEC\x20\x49\x8B\xD8
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 56 57 41 56 48 83 EC 20 49 8B D8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x08
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 D4 53 48 89 FB 48 83 EC 08
</pre>
</td></tr></table>

### ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x81\xEC\x2A\x00\x00\x00\x4C\x8B\x49\x30
</pre>
</td><td>
<pre>
40 56 57 48 81 EC ? 00 00 00 4C 8B 49 30
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

### PlayerMoveNew

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x83\xEC\x30\x48\x8B\xD9\x48\x8B\xFA\x48\x8B\x49\x30
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 57 48 83 EC 30 48 8B D9 48 8B FA 48 8B 49 30
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
\x48\x8B\xC4\x48\x89\x58\x08\x48\x89\x70\x10\x48\x89\x78\x18\x55\x41\x56\x41\x57\x48\x8D\x68\xA1\x48\x81\xEC\xD0\x00\x00\x00
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 08 48 89 70 10 48 89 78 18 55 41 56 41 57 48 8D 68 A1 48 81 EC D0 00 00 00
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
\x48\x89\x74\x24\x20\x57\x48\x83\xEC\x30\x48\x8B\xF2\x48\x8B\xF9\x45\x84\xC0
</pre>
</td><td>
<pre>
48 89 74 24 20 57 48 83 EC 30 48 8B F2 48 8B F9 45 84 C0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x18\x84\xD2
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 83 EC 18 84 D2
</pre>
</td></tr></table>

### MoveInit

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x57\x41\x56\x48\x83\xEC\x50\x48\x8B\xD9
</pre>
</td><td>
<pre>
40 53 57 41 56 48 83 EC 50 48 8B D9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x48\x89\xF7\x53\x48
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 49 89 F5 41 54 49 89 FC 48 89 F7 53 48
</pre>
</td></tr></table>

### CheckWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x08\x48\x89\x78\x10\x55\x48\x8D\xA8\x68\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 08 48 89 78 10 55 48 8D A8 68 FF FF FF
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
\x48\x8B\xC4\x48\x89\x58\x18\x55\x57\x41\x57\x48\x8D\xA8\xB8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 18 55 57 41 57 48 8D A8 B8 FE FF FF
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
\x48\x8B\xC4\x4C\x89\x40\x18\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x68\xA1
</pre>
</td><td>
<pre>
48 8B C4 4C 89 40 18 55 53 56 57 41 54 41 55 41 56 41 57 48 8D 68 A1
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
\x48\x8B\xC4\x48\x89\x58\x20\x55\x56\x57\x41\x56\x41\x57\x48\x8D\xA8\xD8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 20 55 56 57 41 56 41 57 48 8D A8 D8 FE FF FF
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
\x40\x53\x57\x48\x81\xEC\xA8\x00\x00\x00\x48\x8B\xD9
</pre>
</td><td>
<pre>
40 53 57 48 81 EC A8 00 00 00 48 8B D9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x18\x48\x8B\x7F\x30
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 83 EC 18 48 8B 7F 30
</pre>
</td></tr></table>

### AirMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x57\x41\x56\x48\x8D\xA8\x58\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 55 57 41 56 48 8D A8 58 FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\x75\x94\x41\x55\x4C\x8D\x6D\xA0
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 4C 8D 75 94 41 55 4C 8D 6D A0
</pre>
</td></tr></table>

### AirAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x48\x89\x7C\x24\x18\x55\x48\x8D\x6C\x24\xB1
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 48 89 7C 24 18 55 48 8D 6C 24 B1
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
\x48\x89\x5C\x24\x18\x56\x48\x83\xEC\x60\x48\x8B\x41\x30
</pre>
</td><td>
<pre>
48 89 5C 24 18 56 48 83 EC 60 48 8B 41 30
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
\x48\x8B\xC4\x4C\x89\x48\x20\x4C\x89\x40\x18\x48\x89\x50\x10\x55\x53\x56\x57\x41\x54\x41\x55
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 20 4C 89 40 18 48 89 50 10 55 53 56 57 41 54 41 55
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
\x40\x55\x56\x57\x41\x57\x48\x8D\xAC\x24\x28\xFE\xFF\xFF
</pre>
</td><td>
<pre>
40 55 56 57 41 57 48 8D AC 24 28 FE FF FF
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x00\x00\x00\x00\xFF\xFF\xFF\xFF\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xB5\x50\xFE\xFF\xFF
</pre>
</td><td>
<pre>
48 B8 00 00 00 00 FF FF FF FF 55 48 89 E5 41 57 41 56 4C 8D B5 50 FE FF FF
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
\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x60\xF3\x0F\x10\x81\x28\x02\x00\x00
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC 60 F3 0F 10 81 28 02 00 00
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
\x48\x89\x5C\x24\x20\x55\x48\x83\xEC\x50
</pre>
</td><td>
<pre>
48 89 5C 24 20 55 48 83 EC 50
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
\x48\x8B\xC4\x55\x53\x56\x57\x41\x54\x48\x8D\x68\xB8
</pre>
</td><td>
<pre>
48 8B C4 55 53 56 57 41 54 48 8D 68 B8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x30\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC 30 E8 ? ? ? ?
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

## CounterStrikeSharp

Repository: https://github.com/roflmuffin/CounterStrikeSharp

### UTIL_ClientPrintAll

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 57 48 81 EC 70 01 ? ? 8B E9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 D7 41 56 49 89 F6 41 55 41 89 FD
</pre>
</td></tr></table>

### ClientPrint

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 85 C9 0F 84 ? ? ? ? 48 89 5C 24 ? 55
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 CF 41 56 49 89 D6 41 55 41 89 F5 41 54 4C 8D A5 A0 FE FF FF
</pre>
</td></tr></table>

### CCSPlayerController_SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 56 57 48 81 EC ? ? ? ? 48 8B F9 8B F2 8B CA
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 FD 89 F7
</pre>
</td></tr></table>

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
44 88 4C 24 ? 55 56 57 41 54 41 56 48 8D 6C 24 ?
</pre>
</td></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 D6 41 55 49 89 FD 41 54 45 89 C4
</pre>
</td></tr></table>

### CCSPlayerPawnBase_PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 ? ? 55 53 56 57 41 ? 48 ? ? ? 48 ? ? ? ? ? ? 4C 89 68
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC 30 E8 ? ? ? ?
</pre>
</td></tr></table>

### CGameEventManager_Init

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 53 48 83 EC 20 48 8B 01 48 8B D9 FF 50 10
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 FC 48 83 EC 08 48 8B 07 FF 50 18
</pre>
</td></tr></table>

### GiveNamedItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 55 57 41 ? 41 ? 41 ? 48 ? ? ? ? 48 ? ? ? ? ? ? 4D ? ? 48
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 D6 41 55 49 89 CD 41 54 49 89 F4 53 48 89 FB 48 8D 3D
</pre>
</td></tr></table>

### UTIL_Remove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 85 C9 74 ? 48 8B D1 48 8B 0D ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 FE 48 85 FF 74 ? 48 8D 05 ? ? ? ? 48
</pre>
</td></tr></table>

### Host_Say

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
44 89 4C 24 20 44 88 44 24 18
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 D6 41 55 4D 89 C5
</pre>
</td></tr></table>

### CBaseModelEntity_SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 7C 24 ? 55 48 8B EC 48 83 EC 50 48 8B F9 4C 8B C2
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 41 54 49 89 FC 48 8D 7D E0 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B 30 48 8B 06
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices_CanUse

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 56 57 41 56 48 83 EC 30 48 8B 01
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 8D 15 ? ? ? ? 48 89 E5 41 55 49 89 FD 41 54 49 89 F4
</pre>
</td></tr></table>

### CCSGameRules_TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 56
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC 88 00 00 00 48 8D 05 ? ? ? ?
</pre>
</td></tr></table>

### UTIL_CreateEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 83 EC 48 C6 44 24 30 00
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8D 05 ? ? ? ? 55 48 89 FA
</pre>
</td></tr></table>

### CBaseEntity_DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 30 48 8B DA 48 8B F9 48 85 C9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 85 FF 74 ? 55 48 89 E5 41 56
</pre>
</td></tr></table>

### CEntityInstance_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 57 48 83 EC 40 49 8B F0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 48 8D 7D C0
</pre>
</td></tr></table>

### CEntitySystem_AddEntityIOEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 ? ? ? 49 ? ? 48 ? ? 48 ? ? 74
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 41 BA FF FF FF FF
</pre>
</td></tr></table>

### LegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B 15 ? ? ? ? 48 85 D2 74 ? 85 C9 74
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B 05 ? ? ? ? 48 85 C0 74 ? 85 FF
</pre>
</td></tr></table>

### CBasePlayerPawn_RemovePlayerItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 ? ? 0F 84 ? ? ? ? 48 89 5C 24 ? 57 48 ? ? ? 48 ? ? 48 ? ? E8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 ? 41 ? 49 89 ? 41 ? 49 89 ? E8 ? ? ? ? 49 39
</pre>
</td></tr></table>

### CBaseEntity_TakeDamageOld

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 74 24 20 57 48 83 EC 60 48 8B 41 10
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 83 EC 48 4C 8D 2D ? ? ? ? 49 8B 7D 00 48 85 FF 0F 84 ? ? ? ?
</pre>
</td></tr></table>

### CBaseTrigger_StartTouch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
41 56 41 57 48 83 EC 58 48 8B 01
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 F6 41 55 49 89 FD 41 54 53 BB
</pre>
</td></tr></table>

### CBaseTrigger_EndTouch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 53 57 41 55 48 83 EC 40
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 BA FF FF FF FF 48 89 E5 41 57 41 56 41 55 49 89 F5 41
</pre>
</td></tr></table>

### StateChanged

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 ? 53 56 41 ? 41 ? 48 ? ? ? ? 48 ? ? ? ? ? ? 48 ? ? 45
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 89 D3
</pre>
</td></tr></table>

### NetworkStateChanged

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
4C 8B C9 48 8B 09 48 85 C9 74 ? 48 8B 41 10
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
4C 8B 07 4D 85 C0 74 ? 49 8B 40 10
</pre>
</td></tr></table>

### CEntityIOOutput_FireOutputInternal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
4C 89 4C 24 20 53 55 57 41 54 41 56 48 81 EC
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 D4 53 48 89 F3 48 83 EC 58
</pre>
</td></tr></table>

### IGameSystem_InitAllSystems_pFirst

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B 1D ? ? ? ? 48 85 DB 0F 84 ? ? ? ? BE ? ? ? ? 0F 1F 00 48 8B 7B 10
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
4C 8B 35 ? ? ? ? 4D 85 F6 75 2D E9 ? ? ? ? 0F 1F 40 00 48 8B 05
</pre>
</td></tr></table>

## cs2-match-plugin

Repository: https://github.com/ianlucas/cs2-match-plugin

### TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 56
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 11 85
</pre>
</td></tr></table>

### ChangeTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 55 56 57 48 81 EC ? ? ? ? 0F B6 A9
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 44 0F B6 B7 ? ? ? ? 44 39 F6
</pre>
</td></tr></table>

### IncrementNumMVPs

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 55 57 41 57 48 8B EC 48 81 EC
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 8D 3D ? ? ? ? 89 F3
</pre>
</td></tr></table>

## cs2-inventory-simulator-plugin

Repository: https://github.com/ianlucas/cs2-inventory-simulator-plugin

### ChangeSubclass

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 57 48 83 EC ? 48 8B F9 41 B0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 45 31 E4 53 48 81 EC ? ? ? ? 48 85 F6 74 ? 80 3E ? 49 89 F5 75 ? 48 81 C4 ? ? ? ? 44 89 E6 4C 89 F7 5B 41 5C 41 5D 41 5E 41 5F 5D E9 ? ? ? ? 0F 1F 44 00 ? 4C 8D BD ? ? ? ? 48 89 F7 E8 ? ? ? ? 45 31 C0 4C 89 EA 31 F6 49 89 C4 4C 89 FF 89 C3 48 C7 85 ? ? ? ? ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 44 89 E1 48 89 85 ? ? ? ? E8 ? ? ? ? 31 F6 4C 89 FF E8 ? ? ? ? 48 8D 8D ? ? ? ? F6 85 ? ? ? ? ? 75 ? F7 85 ? ? ? ? ? ? ? ? 48 8D 0D ? ? ? ? 48 0F 45 8D ? ? ? ? 44 89 E2 81 F2 ? ? ? ? 41 83 FC ? 0F 8E ? ? ? ? 41 83 EC ? 45 89 E0 41 C1 E8 ? 41 8D 40 ? 48 8D 3C 81 0F 1F 40 ? 69 01 ? ? ? ? 48 83 C1 ? 69 D2 ? ? ? ? 89 C6 C1 EE ? 31 F0 69 C0 ? ? ? ? 31 C2 48 39 F9 75 ? 41 F7 D8 43 8D 1C 84 83 FB ? 74 ? 83 FB ? 74 ? 83 FB ? 74 ? 41 89 D4 89 D0 31 F6 41 C1 EC ? 4C 89 FF 44 31 E0 44 69 E0 ? ? ? ? 44 89 E2 C1 EA ? 41 31 D4 E8 ? ? ? ? 48 8B 05 ? ? ? ? 80 38 ? 0F 84 ? ? ? ? B9 ? ? ? ? 31 D2 4C 89 EE 44 89 E7 E8 ? ? ? ? E9 ? ? ? ? 90 0F B6 47 ? C1 E0 ? 31 C2 0F B6 47 ? C1 E0 ? 31 C2 0F B6 07 31 D0 69 D0 ? ? ? ? EB ? 90 48 89 CF E9 ? ? ? ? 0F 1F 84 00 ? ? ? ? 48 8B 87
</pre>
</td></tr></table>

### CAttributeList_SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 53 41 56 41 57 48 81 EC ? ? ? ? 0F 29 74 24
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 49 89 F4 53 48 83 EC ? F3 0F 11 85
</pre>
</td></tr></table>

### CBaseModelEntity_SetBodygroup

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 41 8B F8 48 8B F2 48 8B D9 E8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 F6 41 55 41 89 D5 41 54 49 89 FC 48 83 EC
</pre>
</td></tr></table>

