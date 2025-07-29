# CounterStrikeSharp 

Last updated: July 29, 2025 at 1:06:10 PM UTC

* Manifests: [6101851358579243038](https://steamdb.info/depot/2347771/history/?changeid=M:6101851358579243038), [3099095894235960265](https://steamdb.info/depot/2347773/history/?changeid=M:3099095894235960265), [4808222971943510939](https://steamdb.info/depot/2347770/history/?changeid=M:4808222971943510939)
* Repository: https://github.com/roflmuffin/CounterStrikeSharp
* Gamedata: https://github.com/roflmuffin/CounterStrikeSharp/blob/main/configs/addons/counterstrikesharp/gamedata/gamedata.json

## Signatures

### CBaseEntity_DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC
</pre>
</td><td>
<pre>
48 85 FF 74 ? 55 48 89 E5 41 55 41 54 49 89 FC
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

### CBaseEntity_EmitSoundFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x49\x89\xCF\x41\x56\x41\x89\xD6
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 49 89 CF 41 56 41 89 D6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\xDC\x49\x89\x5B\x2A\x49\x89\x6B\x2A\x49\x89\x73\x2A\x49\x89\x7B\x2A\x41\x56\x48\x83\xEC\x2A\x49\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x49\x89\x43\x2A\x41\x8B\xF8
</pre>
</td><td>
<pre>
4C 8B DC 49 89 5B ? 49 89 6B ? 49 89 73 ? 49 89 7B ? 41 56 48 83 EC ? 49 C7 43 ? ? ? ? ? 48 8D 05 ? ? ? ? 49 89 43 ? 41 8B F8
</pre>
</td></tr></table>

### CBaseEntity_TakeDamageOld

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x88\x00\x00\x00\xF6\x46\x78\x02
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 F7 41 56 41 55 41 54 53 48 89 FB 48 81 EC 88 00 00 00 F6 46 78 02
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x2A\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x41\x2A\x48\x8B\xFA
</pre>
</td><td>
<pre>
48 89 74 24 ? 57 48 81 EC ? ? ? ? 48 8B 41 ? 48 8B FA
</pre>
</td></tr></table>

### CBaseModelEntity_SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x53\x48\x89\xFB\x48\x8D\x7D\x2A\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x30\x48\x8B\x06\xFF\x50\x2A\x48\x8B\x45\x2A\x48\x8D\x75\x2A\x48\x89\xDF\x48\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x5D\x2A\xC9\xC3\xCC\xCC\xCC\x55
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 53 48 89 FB 48 8D 7D ? 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B 30 48 8B 06 FF 50 ? 48 8B 45 ? 48 8D 75 ? 48 89 DF 48 89 45 ? E8 ? ? ? ? 48 8B 5D ? C9 C3 CC CC CC 55
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8D\x54\x24\x2A\x48\x8B\x01\xFF\x50\x2A\x48\x8B\x44\x24\x2A\x48\x8D\x54\x24\x2A\x48\x8B\xCB\x48\x89\x44\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x2A\x5B\xC3\xCC\xCC\xCC\xCC\xCC\x48\x89\x5C\x24
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B D9 4C 8B C2 48 8B 0D ? ? ? ? 48 8D 54 24 ? 48 8B 01 FF 50 ? 48 8B 44 24 ? 48 8D 54 24 ? 48 8B CB 48 89 44 24 ? E8 ? ? ? ? 48 83 C4 ? 5B C3 CC CC CC CC CC 48 89 5C 24
</pre>
</td></tr></table>

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x87\x10\x08\x00\x00
</pre>
</td><td>
<pre>
55 48 8D 87 10 08 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x2A\x4C\x8B\x15
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 41 54 41 55 41 56 41 57 48 83 EC ? 4C 8B 15
</pre>
</td></tr></table>

### CBasePlayerPawn_RemovePlayerItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\xE8\x2A\x2A\x2A\x2A\x48\x39\xC3\x74\x2A\x4C\x89\xE7\xE8\x2A\x2A\x2A\x2A\x48\x39\xC3\x74\x2A\x4C\x89\xE7\x48\x89\xDE\xE8\x2A\x2A\x2A\x2A\x48\x89\xDF\x5B\x41\x5C\x5D\xE9\x2A\x2A\x2A\x2A\x0F\x1F\x44\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 FC 53 48 89 F3 E8 ? ? ? ? 48 39 C3 74 ? 4C 89 E7 E8 ? ? ? ? 48 39 C3 74 ? 4C 89 E7 48 89 DE E8 ? ? ? ? 48 89 DF 5B 41 5C 5D E9 ? ? ? ? 0F 1F 44 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x2A\x57\x48\x2A\x2A\x2A\x48\x2A\x2A\x48\x2A\x2A\xE8
</pre>
</td><td>
<pre>
48 ? ? 0F 84 ? ? ? ? 48 89 5C 24 ? 57 48 ? ? ? 48 ? ? 48 ? ? E8
</pre>
</td></tr></table>

### CBaseTrigger_EndTouch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xBA\xFF\xFF\xFF\xFF\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41
</pre>
</td><td>
<pre>
55 BA FF FF FF FF 48 89 E5 41 57 41 56 41 55 49 89 F5 41
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x41\x55\x48\x83\xEC\x28
</pre>
</td><td>
<pre>
40 53 41 55 48 83 EC 28
</pre>
</td></tr></table>

### CBaseTrigger_StartTouch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x07
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 83 EC ? 48 8B 07
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x57\x41\x56\x48\x83\xEC\x2A\x48\x8B\x01
</pre>
</td><td>
<pre>
40 57 41 56 48 83 EC ? 48 8B 01
</pre>
</td></tr></table>

### CCSGameRules_TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xF3\x0F\x11\x85
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 11 85
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x56
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 56
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

### CCSPlayerPawnBase_PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x83\xEC\x58\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 83 EC 58 E8
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

### CCSPlayer_ItemServices_CanAcquire

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x78
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 CD 41 54 49 89 FC 53 48 89 F3 48 83 EC 78
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x89\x44\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x53\x56\x57\x41\x55\x41\x56\x41\x57\x48\x8B\xEC
</pre>
</td><td>
<pre>
44 89 44 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 55 41 56 41 57 48 8B EC
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices_CanUse

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x15\xE8\xEC\xFF\xFF
</pre>
</td><td>
<pre>
55 48 8D 15 E8 EC FF FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x56\x57\x41\x56\x48\x83\xEC\x2A\x48\x8B\x01\x48\x8B\xFA
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 56 57 41 56 48 83 EC ? 48 8B 01 48 8B FA
</pre>
</td></tr></table>

### CEntityIOOutput_FireOutputInternal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xF3\x48\x83\xEC\x58
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 D4 53 48 89 F3 48 83 EC 58
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x89\x4C\x24\x2A\x48\x89\x4C\x24\x2A\x53\x56
</pre>
</td><td>
<pre>
4C 89 4C 24 ? 48 89 4C 24 ? 53 56
</pre>
</td></tr></table>

### CEntityInstance_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF0\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x48\x8D\x7D\xC0
</pre>
</td><td>
<pre>
55 48 89 F0 48 89 E5 41 57 49 89 FF 41 56 48 8D 7D C0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xE8\x2A\x2A\x2A\x2A\xF6\x44\x24\x2A\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x54\x24\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x48\x83\xC4\x2A\x5B\xC3\xCC\xCC\xCC\x48\x89\x5C\x24
</pre>
</td><td>
<pre>
E8 ? ? ? ? F6 44 24 ? ? 74 ? 48 8B 05 ? ? ? ? 48 8B 54 24 ? 48 8B 08 48 8B 01 FF 50 ? 48 83 C4 ? 5B C3 CC CC CC 48 89 5C 24
</pre>
</td></tr></table>

### CEntitySystem_AddEntityIOEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xFC
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 CD 41 54 49 89 FC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x4C\x89\x4C\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x2A\x49\x8B\xF9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 4C 89 4C 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 83 EC ? 49 8B F9
</pre>
</td></tr></table>

### CGameEventManager_Init

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x08\x48\x8B\x07\xFF\x50\x18
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC 08 48 8B 07 FF 50 18
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x20\x48\x8B\x01\x48\x8B\xD9\xFF\x50\x10
</pre>
</td><td>
<pre>
40 53 48 83 EC 20 48 8B 01 48 8B D9 FF 50 10
</pre>
</td></tr></table>

### CheckTransmit

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x89\xD7\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x78\x01\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 89 D7 41 56 41 55 41 54 53 48 81 EC 78 01 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x50\x2A\x48\x89\x48\x2A\x55\x48\x8D\xA8
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 50 ? 48 89 48 ? 55 48 8D A8
</pre>
</td></tr></table>

### ClientPrint

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\xF8\x5F\x8B\x00
</pre>
</td><td>
<pre>
55 48 8D 05 F8 5F 8B 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x2A\x55
</pre>
</td><td>
<pre>
48 85 C9 0F 84 ? ? ? ? 48 89 5C 24 ? 55
</pre>
</td></tr></table>

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x53\x48\x81\xEC\x10\x01\x00\x00\x48\x85\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 53 48 81 EC 10 01 00 00 48 85 FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x33\xED\x48\x8B\xFA\x8B\xF1
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 33 ED 48 8B FA 8B F1
</pre>
</td></tr></table>

### GiveNamedItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\xD8\x00\x00\x00\x48\x89\x8D\x18\xFF\xFF\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 81 EC D8 00 00 00 48 89 8D 18 FF FF FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x55\x57\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4D\x8B\xF9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 55 57 41 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4D 8B F9
</pre>
</td></tr></table>

### Host_Say

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x41\x55\x41\x54\x4D\x89\xC4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 F7 41 56 41 55 41 54 4D 89 C4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x89\x4C\x24\x20\x44\x88\x44\x24\x18
</pre>
</td><td>
<pre>
44 89 4C 24 20 44 88 44 24 18
</pre>
</td></tr></table>

### IGameSystem_InitAllSystems_pFirst

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x4C\x8B\x35\x2A\x2A\x2A\x2A\x4D\x85\xF6\x75\x2A\xE9
</pre>
</td><td>
<pre>
4C 8B 35 ? ? ? ? 4D 85 F6 75 ? E9
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x55\x56\x57\x48\x83\xEC\x2A\x48\x8D\x05
</pre>
</td><td>
<pre>
48 89 5C 24 ? 55 56 57 48 83 EC ? 48 8D 05
</pre>
</td></tr></table>

### LegacyGameEventListener

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

### UTIL_ClientPrintAll

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x4D\x89\xCF\x41\x56\x4D\x89\xC6\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xD4\x53\x48\x8D
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 4D 89 CF 41 56 4D 89 C6 41 55 49 89 CD 41 54 49 89 D4 53 48 8D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x8B\xE9\x49\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 8B E9 49 8B D9
</pre>
</td></tr></table>

### UTIL_CreateEntityByName

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

### UTIL_Remove

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

