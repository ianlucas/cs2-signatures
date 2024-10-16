# CounterStrikeSharp 

Last updated: October 16, 2024 at 4:28:17 AM UTC

* Repository: https://github.com/roflmuffin/CounterStrikeSharp
* Gamedata: https://github.com/roflmuffin/CounterStrikeSharp/blob/main/configs/addons/counterstrikesharp/gamedata/gamedata.json

## Signatures

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
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 74 24 ? 55 41 54 41 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B F9
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
55 48 89 E5 41 57 41 56 49 89 F6 41 55 4D 89 C5
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
48 89 5C 24 ? 48 89 6C 24 ? 56 57 41 56 48 83 EC 30 48 8B 01
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
48 89 74 24 ? 57 48 81 EC 80 00 00 00 48 8B 41
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 83 EC 58 4C 8D 3D
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
40 57 41 57 48 83 EC 28 48 8B 01
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
40 53 41 55 48 83 EC 28
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
40 55 53 56 41 56 41 57 48 8D 6C 24 ? 48 81 EC 70 01 00 00
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
48 8B 3D ? ? ? ? 48 85 FF 0F 84 ? ? ? ? BE
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
4C 8B 35 ? ? ? ? 4D 85 F6 75 ? E9
</pre>
</td></tr></table>

