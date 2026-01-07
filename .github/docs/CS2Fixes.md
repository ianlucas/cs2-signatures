# CS2Fixes 

Last updated: January 7, 2026 at 4:36:33 PM UTC

* Manifests: [8348690621754004818](https://steamdb.info/depot/2347770/history/?changeid=M:8348690621754004818), [3970280707550781410](https://steamdb.info/depot/2347771/history/?changeid=M:3970280707550781410), [8128465550651630543](https://steamdb.info/depot/2347773/history/?changeid=M:8128465550651630543)
* Repository: https://github.com/Source2ZE/CS2Fixes
* Gamedata: https://github.com/Source2ZE/CS2Fixes/blob/main/gamedata/cs2fixes.games.txt

## Signatures

### CBaseModelEntity_SetModel

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

### BotNavIgnore

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB0\x2A\x2A\x2A\x2A\x45\x84\xF6\x0F\x84
</pre>
</td><td>
<pre>
0F 84 ? ? ? ? 44 0F B6 B0 ? ? ? ? 45 84 F6 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x00\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x00\x74\x15
</pre>
</td><td>
<pre>
0F 84 ? ? ? ? 80 B8 ? ? ? ? 00 0F 84 ? ? ? ? 80 3D ? ? ? ? 00 74 15
</pre>
</td></tr></table>

### CBaseEntity::SetGravityScale

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x2E\x87\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\x48\x81\xC4\x2A\x2A\x2A\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x40\x2A\x31\xC9\x31\xF6\x31\xFF\xF3\x0F\x11\x85\x2A\x2A\x2A\x2A\x66\x89\x8D\x2A\x2A\x2A\x2A\xBA\x2A\x2A\x2A\x2A\xB9\x2A\x2A\x2A\x2A\x66\x0F\xEF\xC9\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0F\x29\x8D\x2A\x2A\x2A\x2A\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\xF3\x0F\x10\x85\x2A\x2A\x2A\x2A\x85\xC0\x41\x89\xC4\x0F\x8E\x2A\x2A\x2A\x2A\x48\x63\x8D\x2A\x2A\x2A\x2A\x48\x63\xD0\x31\xF6\xF3\x0F\x11\x85\x2A\x2A\x2A\x2A\x48\xC1\xE2\x2A\x48\x8B\xBD\x2A\x2A\x2A\x2A\x48\xC1\xE1\x2A\x81\xBD\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x40\x0F\x96\xC6\xE8\x2A\x2A\x2A\x2A\x8B\x95\x2A\x2A\x2A\x2A\xF3\x0F\x10\x85\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x81\xFA\x2A\x2A\x2A\x2A\x0F\x87
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 81 EC ? ? ? ? 0F 2E 87 ? ? ? ? 7A ? 75 ? 48 81 C4 ? ? ? ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 40 ? 31 C9 31 F6 31 FF F3 0F 11 85 ? ? ? ? 66 89 8D ? ? ? ? BA ? ? ? ? B9 ? ? ? ? 66 0F EF C9 48 C7 85 ? ? ? ? ? ? ? ? 48 C7 85 ? ? ? ? ? ? ? ? 48 C7 85 ? ? ? ? ? ? ? ? 48 C7 85 ? ? ? ? ? ? ? ? 0F 29 8D ? ? ? ? 48 C7 85 ? ? ? ? ? ? ? ? C7 85 ? ? ? ? ? ? ? ? E8 ? ? ? ? F3 0F 10 85 ? ? ? ? 85 C0 41 89 C4 0F 8E ? ? ? ? 48 63 8D ? ? ? ? 48 63 D0 31 F6 F3 0F 11 85 ? ? ? ? 48 C1 E2 ? 48 8B BD ? ? ? ? 48 C1 E1 ? 81 BD ? ? ? ? ? ? ? ? 40 0F 96 C6 E8 ? ? ? ? 8B 95 ? ? ? ? F3 0F 10 85 ? ? ? ? 48 89 85 ? ? ? ? 81 FA ? ? ? ? 0F 87
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x2A\xF3\x0F\x10\x81\x04\x04\x00\x00
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC ? F3 0F 10 81 04 04 00 00
</pre>
</td></tr></table>

### CBaseEntity_EmitSoundFilter

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

### CBaseEntity_EmitSoundParams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x0F\x28\xD0
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 0F 28 D0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x55\x48\x8B\xEC\x48\x81\xEC\x2A\x2A\x2A\x2A\x33\xC0
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 55 48 8B EC 48 81 EC ? ? ? ? 33 C0
</pre>
</td></tr></table>

### CBaseEntity_SetMoveType

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x40\x38\xB7
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 89 D5 41 54 53 48 89 FB 48 83 EC ? 40 38 B7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x48\x83\xEC\x2A\x41\x0F\xB6\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 56 48 83 EC ? 41 0F B6 F0
</pre>
</td></tr></table>

### CBaseEntity_TakeDamageOld

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xD3\x48\x83\xEC\x2A\x48\x85\xD2
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 F6 41 55 41 54 49 89 FC 53 48 89 D3 48 83 EC ? 48 85 D2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x6C\x24\x2A\x48\x89\x9D\x2A\x2A\x2A\x2A\x45\x33\xED
</pre>
</td><td>
<pre>
40 55 41 54 41 55 41 56 41 57 48 81 EC ? ? ? ? 48 8D 6C 24 ? 48 89 9D ? ? ? ? 45 33 ED
</pre>
</td></tr></table>

### CBaseFilter_InputTestActivator

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x07\x48\x8B\x16
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 07 48 8B 16
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x4C\x8B\x02
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 4C 8B 02
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

### CBasePlayerPawn_GetEyeAngles

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\xBF\x2A\x2A\x2A\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x07\x48\x8D\x15
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 53 48 89 FB 48 83 EC ? 48 8B BF ? ? ? ? 48 85 FF 0F 84 ? ? ? ? 48 8B 07 48 8D 15
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9\x48\x8B\xDA\x48\x8B\x89
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 81 EC ? ? ? ? 48 8B F9 48 8B DA 48 8B 89
</pre>
</td></tr></table>

### CBasePlayerPawn_GetEyePosition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\xBF\x2A\x2A\x2A\x2A\x48\x85\xFF\x0F\x84
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC ? 48 8B BF ? ? ? ? 48 85 FF 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xF9\x48\x8B\xDA\x48\x8B\x89\x2A\x2A\x2A\x2A\x48\x85\xC9\x74\x2A\x48\x8B\x01
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B F9 48 8B DA 48 8B 89 ? ? ? ? 48 85 C9 74 ? 48 8B 01
</pre>
</td></tr></table>

### CCSGameRules__sm_mapGcBanInformation

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8D\x0D\x2A\x2A\x2A\x2A\x48\x63\x51\x2A\x83\xFA\x2A\x0F\x84\x2A\x2A\x2A\x2A\xF7\x41\x2A\x2A\x2A\x2A\x2A\x74
</pre>
</td><td>
<pre>
48 8D 0D ? ? ? ? 48 63 51 ? 83 FA ? 0F 84 ? ? ? ? F7 41 ? ? ? ? ? 74
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8D\x0D\x2A\x2A\x2A\x2A\x48\x89\x45\x2A\x0F\x11\x45
</pre>
</td><td>
<pre>
48 8D 0D ? ? ? ? 48 89 45 ? 0F 11 45
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

### CCSPlayerPawn_GetMaxSpeed

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x84\xC0\x75\x2A\x48\x8D\x05
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 84 C0 75 ? 48 8D 05
</pre>
</td></tr></table>

### CCSPlayer_ItemServices_CanAcquire

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 CD 41 54 49 89 FC 53 48 89 F3 48 83 EC
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
\x55\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\x07\x48\x8B\x80
</pre>
</td><td>
<pre>
55 48 8D 15 ? ? ? ? 48 89 E5 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 8B 07 48 8B 80
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

### CCSPlayer_WeaponServices_EquipWeapon

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\x77
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 8B 77
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x83\x79\x2A\x2A\x48\x8B\xFA\x48\x8B\xD9\x75\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x53
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 83 79 ? ? 48 8B FA 48 8B D9 75 ? E8 ? ? ? ? 48 8B 53
</pre>
</td></tr></table>

### CEntityIOOutput_FireOutputInternal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xF3
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 49 89 D4 53 48 89 F3
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

### CEntityIdentity_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x49\x89\xD3\x48\x89\xE5\x41\x57\x45\x89\xCF\x41\x56
</pre>
</td><td>
<pre>
55 49 89 D3 48 89 E5 41 57 45 89 CF 41 56
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x02
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 48 8B 02
</pre>
</td></tr></table>

### CEntityIdentity_SetEntityName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x41\x55\x41\x54\x53
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 41 55 41 54 53
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x20\x48\x8B\xD9\x4C\x8B\xC2
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 20 48 8B D9 4C 8B C2
</pre>
</td></tr></table>

### CEntityInstance_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF0\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x48\x8D\x7D
</pre>
</td><td>
<pre>
55 48 89 F0 48 89 E5 41 57 49 89 FF 41 56 48 8D 7D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x49\x8B\xF0\x48\x8B\xD9\x48\x8B\x0D
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 49 8B F0 48 8B D9 48 8B 0D
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
\x48\x89\x5C\x24\x18\x4C\x89\x4C\x24\x20\x48\x89\x4C\x24\x08\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x20
</pre>
</td><td>
<pre>
48 89 5C 24 18 4C 89 4C 24 20 48 89 4C 24 08 55 56 57 41 54 41 55 41 56 41 57 48 83 EC 20
</pre>
</td></tr></table>

### CGameEntitySystem_FindEntityByClassName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x45\x31\xC0\x31\xC9\x48\x89\xE5\x53\x48\x8D\x5D\x2A\x48\x83\xEC\x2A\x48\x89\xDF
</pre>
</td><td>
<pre>
55 45 31 C0 31 C9 48 89 E5 53 48 8D 5D ? 48 83 EC ? 48 89 DF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x68\x45\x33\xC9
</pre>
</td><td>
<pre>
48 83 EC 68 45 33 C9
</pre>
</td></tr></table>

### CGameEntitySystem_FindEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x53\x48\x83\xEC\x2A\x48\x85\xD2
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 53 48 83 EC ? 48 85 D2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x81\xEC\x88\x2A\x2A\x2A\x4D\x85\xC0
</pre>
</td><td>
<pre>
48 81 EC 88 ? ? ? 4D 85 C0
</pre>
</td></tr></table>

### CGamePlayerEquip_InputTriggerForActivatedPlayer

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x48\x8B\x1E
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 83 EC ? 48 8B 1E
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x56\x48\x83\xEC\x20\x48\x8B\x1A
</pre>
</td><td>
<pre>
48 89 5C 24 18 56 48 83 EC 20 48 8B 1A
</pre>
</td></tr></table>

### CGamePlayerEquip_InputTriggerForAllPlayers

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\xC7\x45
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 53 48 83 EC ? E8 ? ? ? ? C7 45
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x41\x54\x41\x56\x48\x8B\xEC\x48\x83\xEC\x2A\x4C\x8B\xF1
</pre>
</td><td>
<pre>
40 55 53 41 54 41 56 48 8B EC 48 83 EC ? 4C 8B F1
</pre>
</td></tr></table>

### CGameRules_TerminateRound

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

### CNavMesh_GetNearestNavArea

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\x3D\x2A\x2A\x2A\x2A\x41\x55\x41\x54\x49\x89\xD4
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 41 56 4C 8D 3D ? ? ? ? 41 55 41 54 49 89 D4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x44\x89\x4C\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24
</pre>
</td><td>
<pre>
48 89 5C 24 ? 44 89 4C 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24
</pre>
</td></tr></table>

### CPhysBox_Use

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x49\x8B\x54\x24\x2A\x45\x31\xC9\x45\x31\xC0\xC7\x45\x2A\x2A\x2A\x2A\x2A\x49\x8B\x34\x24\x48\x8D\x4D\x2A\x66\x0F\xEF\xC0\x48\xC7\x45\x2A\x2A\x2A\x2A\x2A\x48\x8D\xBB\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\xF6\x45\x2A\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x75\x2A\x48\x8B\x38\x48\x8B\x07\xFF\x50\x2A\x48\x83\xC4
</pre>
</td><td>
<pre>
49 8B 54 24 ? 45 31 C9 45 31 C0 C7 45 ? ? ? ? ? 49 8B 34 24 48 8D 4D ? 66 0F EF C0 48 C7 45 ? ? ? ? ? 48 8D BB ? ? ? ? E8 ? ? ? ? F6 45 ? ? 74 ? 48 8B 05 ? ? ? ? 48 8B 75 ? 48 8B 38 48 8B 07 FF 50 ? 48 83 C4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\x43\x2A\x48\x8D\x8F\x2A\x2A\x2A\x2A\x48\x8B\x13\xE8\x2A\x2A\x2A\x2A\x48\x8B\x5C\x24\x2A\x48\x83\xC4\x2A\x5F\xC3\xCC\xCC\xCC\xCC\x40\x53
</pre>
</td><td>
<pre>
4C 8B 43 ? 48 8D 8F ? ? ? ? 48 8B 13 E8 ? ? ? ? 48 8B 5C 24 ? 48 83 C4 ? 5F C3 CC CC CC CC 40 53
</pre>
</td></tr></table>

### CTakeDamageInfo

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x49\xBB\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC9\x48\x89\xE5
</pre>
</td><td>
<pre>
49 BB ? ? ? ? ? ? ? ? 55 66 0F EF C9 48 89 E5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\xD9\x48\x89\x01\x33\xC0
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B D9 48 89 01 33 C0
</pre>
</td></tr></table>

### CTriggerGravity_GravityTouch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x06\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x48\x89\xF7\x53\x48\x89\xF3\xFF\x90
</pre>
</td><td>
<pre>
48 8B 06 55 48 89 E5 41 54 49 89 FC 48 89 F7 53 48 89 F3 FF 90
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\x02\x48\x8B\xF9\x48\x8B\xCA\x48\x8B\xDA\xFF\x90\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\xF3\x0F\x10\x8F
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B 02 48 8B F9 48 8B CA 48 8B DA FF 90 ? ? ? ? 84 C0 74 ? F3 0F 10 8F
</pre>
</td></tr></table>

### CheckJumpButtonWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\xC8\x42\x41\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x41\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\xE9
</pre>
</td><td>
<pre>
C8 42 41 C7 85 ? ? ? ? ? ? ? ? 41 C7 85 ? ? ? ? ? ? ? ? E9
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xC8\x42\xEB\x2A\x4C\x39\x67\x30
</pre>
</td><td>
<pre>
C8 42 EB ? 4C 39 67 30
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

### DispatchParticleEffect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x41\x89\xCC\x53\x48\x89\xD3
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 41 89 CC 53 48 89 D3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x48\x89\x7C\x24\x18\x4C\x89\x74\x24\x20\x55\x48\x8D\x6C\x24\xD1
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 48 89 7C 24 18 4C 89 74 24 20 55 48 8D 6C 24 D1
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

### FindUseEntity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x48\x8D\x3D\x2A\x2A\x2A\x2A\x53\x48\x81\xEC
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 48 8D 3D ? ? ? ? 53 48 81 EC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x89\x44\x24\x2A\xF3\x0F\x11\x4C\x24\x2A\x55\x53\x56
</pre>
</td><td>
<pre>
4C 89 44 24 ? F3 0F 11 4C 24 ? 55 53 56
</pre>
</td></tr></table>

### GameSystem_Think_CheckSteamBan

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x3D\x2A\x2A\x2A\x2A\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC
</pre>
</td><td>
<pre>
55 48 8D 3D ? ? ? ? BE ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x41\x54\x48\x81\xEC\x2A\x2A\x2A\x2A\xBA\x2A\x2A\x2A\x2A\x48\x8D\x0D\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0
</pre>
</td><td>
<pre>
41 54 48 81 EC ? ? ? ? BA ? ? ? ? 48 8D 0D ? ? ? ? E8 ? ? ? ? 48 85 C0
</pre>
</td></tr></table>

### GetFreeClient

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x41\xC6\x01
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 49 89 F4 53 48 81 EC ? ? ? ? 41 C6 01
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x54\x24\x2A\x53\x56\x57\x41\x56\x48\x83\xEC
</pre>
</td><td>
<pre>
48 89 54 24 ? 53 56 57 41 56 48 83 EC
</pre>
</td></tr></table>

### GetSpawnGroups

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x49\x89\xF1\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBF
</pre>
</td><td>
<pre>
55 49 89 F1 BE ? ? ? ? 48 89 E5 41 57 41 56 4C 8D BF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x48\x83\xEC\x2A\x48\x89\x5C\x24\x2A\x48\x8D\xB1
</pre>
</td><td>
<pre>
40 56 48 83 EC ? 48 89 5C 24 ? 48 8D B1
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
\x48\x8B\x1D\x2A\x2A\x2A\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\xBD
</pre>
</td><td>
<pre>
48 8B 1D ? ? ? ? 48 85 DB 0F 84 ? ? ? ? BD
</pre>
</td></tr></table>

### IGameSystem_LoopDestroyAllSystems_s_GameSystems

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x8B\x05\x2A\x2A\x2A\x2A\x89\xC2\x83\xEA\x2A\x0F\x88\x2A\x2A\x2A\x2A\x4C\x8D\x3D
</pre>
</td><td>
<pre>
8B 05 ? ? ? ? 89 C2 83 EA ? 0F 88 ? ? ? ? 4C 8D 3D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x8B\x05\x2A\x2A\x2A\x2A\x83\xE8\x2A\x48\x63\xF8\x0F\x88
</pre>
</td><td>
<pre>
8B 05 ? ? ? ? 83 E8 ? 48 63 F8 0F 88
</pre>
</td></tr></table>

### IGameSystem_LoopPostInitAllSystems_pEventDispatcher

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x4C\x8B\x25\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x8B\x35
</pre>
</td><td>
<pre>
4C 8B 25 ? ? ? ? 48 8B 05 ? ? ? ? 8B 35
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x39\x1D\x2A\x2A\x2A\x2A\x74\x2A\x39\x05
</pre>
</td><td>
<pre>
48 39 1D ? ? ? ? 74 ? 39 05
</pre>
</td></tr></table>

### IsHearingClient

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x39\x77
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 39 77
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\x3B\x51
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B D9 3B 51
</pre>
</td></tr></table>

### ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x8B\x8F
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 0F 84 ? ? ? ? 8B 8F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x57\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x83\x79
</pre>
</td><td>
<pre>
40 57 41 57 48 81 EC ? ? ? ? 48 83 79
</pre>
</td></tr></table>

### ProcessUsercmds

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x89\x4D
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 89 4D
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

### ServerMovementUnlock

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\x87\x2A\x2A\x2A\x2A\xF3\x0F\x10\x35\x2A\x2A\x2A\x2A\xF3\x0F\x11\xB5\x2A\x2A\x2A\x2A\x4C\x89\xEE
</pre>
</td><td>
<pre>
0F 87 ? ? ? ? F3 0F 10 35 ? ? ? ? F3 0F 11 B5 ? ? ? ? 4C 89 EE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x0F\x86\xB0\x2A\x2A\x2A\xF3\x0F\x58\xD3
</pre>
</td><td>
<pre>
0F 86 B0 ? ? ? F3 0F 58 D3
</pre>
</td></tr></table>

### SetGroundEntity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x87\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xD6
</pre>
</td><td>
<pre>
55 48 8D 87 ? ? ? ? 48 89 E5 41 57 41 56 49 89 D6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x56\x57\x41\x54\x48\x83\xEC\x2A\x44\x8B\x89
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 56 57 41 54 48 83 EC ? 44 8B 89
</pre>
</td></tr></table>

### TraceFunc

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x4C\x8D\x6F\x2A\x49\x89\xCC
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 48 89 E5 41 55 41 54 4C 8D 6F ? 49 89 CC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x54\x41\x56\x41\x57\x48\x81\xEC\x80\x00\x00\x00\x45\x33\xE4
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 54 41 56 41 57 48 81 EC 80 00 00 00 45 33 E4
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
\x48\x89\x5C\x24\x2A\x48\x89\x4C\x24\x2A\x55\x57
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 4C 24 ? 55 57
</pre>
</td></tr></table>

### TriggerPush_Touch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x84\xC0
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 84 C0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x02\x48\x8B\xF9
</pre>
</td><td>
<pre>
40 55 53 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8B 02 48 8B F9
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

### UTIL_SayText2Filter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x89\xD7\x31\xD2
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 41 89 D7 31 D2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x55\x57\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x41\x0F\xB6\xF8
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 55 57 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 41 0F B6 F8
</pre>
</td></tr></table>

### UTIL_SayTextFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\x75\x2A\x41\x55\x41\x89\xCD
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 41 56 4C 8D 75 ? 41 55 41 89 CD
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x55\x57\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x49\x8B\xD8
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 55 57 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 49 8B D8
</pre>
</td></tr></table>

