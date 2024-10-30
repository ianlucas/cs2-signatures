# swiftly 

Last updated: October 30, 2024 at 1:33:29 AM UTC

* Repository: https://github.com/swiftly-solution/swiftly
* Gamedata: https://github.com/swiftly-solution/swiftly/blob/master/plugin_files/gamedata/core/signatures.json

## Signatures

### ServerMovementUnlock

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
76 ? F2 0F 10 4F ? 41 0F 28 C1 0F 28 D1 F3 0F 59 C0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
0F 87 ? ? ? ? 49 8B 7C 24 ? E8 ? ? ? ? 66 0F EF ED 66 0F D6 85
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

### CEntityIdentity_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 55 41 56 41 57 48 8D 6C 24
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 4C 8D BD D0 FE FF FF 49 89 D6 41 55 49 89 F5 41 54 49 89 CC
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

### PrecacheResource

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC 20 48 8B 7A 10
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 48 85 FF 74 ? 80 3F 00
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

### CAttributeList_SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 53 41 56 41 57 48 81 EC 90 00 00 00 0F 29 74 24 70
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 49 89 F4 53 48 83 EC 78
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
48 89 5C 24 08 48 89 74 24 10 57 48 83 EC 20 41 8B F8 48 8B F2 48 8B D9 E8 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 F6 41 55 41 89 D5 41 54 49 89 FC 48 83 EC 08
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

### FireOutputInternal

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

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 74 24 18 55 41 54 41 55 41 56 41 57 48 8D 6C 24 D1
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 45 89 C4
</pre>
</td></tr></table>

### HostStateRequest

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>engine2</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 74 24 10 57 48 83 EC 30 33 F6 48 8B FA
</pre>
</td></tr><tr><td>❓</td><td>Linux</td><td>engine2</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 83 7F 30 00
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
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC 40 E8
</pre>
</td></tr></table>

### CCSPlayer_MovementServices_CheckJumpPre

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 56 48 83 EC 40 48 8B F2 48 8B D9 BA ? ? ? ? E8 ? ? ? ? 48 8B 4B 30
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 F4 BE ? ? ? ? 53 48 89 FB 48 83 EC 30 E8 ? ? ? ? 48 8B 7B 30
</pre>
</td></tr></table>

### CBaseEntity_EmitSoundFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 56 48 83 EC 30 48 8B EA
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 D6 41 55 41 89 F5 41 54 48 8D 35 ? ? ? ?
</pre>
</td></tr></table>

### CGameRules_TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 41 55
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

### CCSPlayer_CanAcquire

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B C4 44 89 40 ? 48 89 50 ? 48 89 48
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 CD 41 54 53 48 83 EC
</pre>
</td></tr></table>

### CLoggingSystem_LogDirect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Windows</td><td>tier0</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
4C 89 4C 24 20 44 89 44 24 18 89 54 24 10 55
</pre>
</td></tr><tr><td>❓</td><td>Linux</td><td>tier0</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 89 D0 48 89 E5 41 57 41 56 41 55
</pre>
</td></tr></table>

### CBaseEntity_TakeDamage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 74 24 ? 57 48 81 EC ? ? ? ? 48 8B 41 ? 48 8B FA
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 83 EC ? 4C 8D 3D ? ? ? ? 49 8B 3F
</pre>
</td></tr></table>

### BotNavIgnore1

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
0F 84 ? ? ? ? 80 B8 ? ? ? ? 00 0F 84 ? ? ? ? 80 3D ? ? ? ? 00 74 15
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 85 C0 74 ? 80 B8 ? ? ? ? 00 74 ? 48 8D 05 ? ? ? ? 80 38 00 75 ? 44 8B 85 ? ? ? ? 31 F6 BF 03 00 00 00
</pre>
</td></tr></table>

### BotNavIgnore2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
0F 84 ? ? ? ? 80 B8 ? ? ? ? 00 0F 84 ? ? ? ? 80 3D ? ? ? ? 00 74 15
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 85 C0 74 ? 80 B8 ? ? ? ? 00 74 ? 48 8D 05 ? ? ? ? 80 38 00 75 ? 44 8B 85 ? ? ? ? 31 F6 BF 02 00 00 00
</pre>
</td></tr></table>

### BotNavIgnore3

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
0F 84 ? ? ? ? 80 B8 ? ? ? ? 00 0F 84 ? ? ? ? 80 3D ? ? ? ? 00 74 15
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 85 C0 74 ? 80 B8 ? ? ? ? 00 74 ? 48 8D 05 ? ? ? ? 80 38 00 75 ? 41 B8 04 00 00 00
</pre>
</td></tr></table>

