# plugify 

Last updated: August 14, 2025 at 11:50:38 PM UTC

* Manifests: [5480869389366142383](https://steamdb.info/depot/2347771/history/?changeid=M:5480869389366142383), [2365737784967523922](https://steamdb.info/depot/2347773/history/?changeid=M:2365737784967523922), [8047924243551660563](https://steamdb.info/depot/2347770/history/?changeid=M:8047924243551660563)
* Repository: https://github.com/untrustedmodders/plugify-source-2
* Gamedata: https://github.com/untrustedmodders/plugify-source-2/blob/main/assets/gamedata.jsonc

## Signatures

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x87\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x45\x89\xC7
</pre>
</td><td>
<pre>
55 48 8D 87 ? ? ? ? 48 89 E5 41 57 45 89 C7
</pre>
</td></tr><tr><td>✅⚠️(2)</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xD9\x48\x8B\xFA
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B D9 48 8B FA
</pre>
</td></tr></table>

### AppSystemCreateInterfaceFn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xFD\x41\x54\x48\x8D\x7D
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 FD 41 54 48 8D 7D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xD1\x48\x8B\x0D
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B DA 48 8B D1 48 8B 0D
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

### CBaseEntity_EmitSoundParams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xF3\x48\x83\xEC\x2A\x4D\x85\xC0\x0F\x95\xC2\x48\x85\xF6\x40\x0F\x94\xC6\x40\x08\xF2\x75\x2A\x83\xF9\x2A\x75\x2A\x49\x89\xFE\x40\xF6\xC7\x2A\x75\x2A\x41\x0F\xB6\x54\x24\x2A\x80\xFA\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\xFA\x2A\x74\x2A\x80\xFA\x2A\x75\x2A\x49\x8B\x34\x24\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x85\xF6\x48\x0F\x44\xF0\x48\x89\xDF\x41\xFF\xD6\x48\x83\xC4\x2A\xB8\x2A\x2A\x2A\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x40\x2A\x48\x8B\x13\x4C\x8B\x74\x3A\x2A\x41\x0F\xB6\x54\x24\x2A\x80\xFA\x2A\x75\x2A\xEB\x2A\x0F\x1F\x00\x48\x83\xC4\x2A\x31\xC0\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x45\x31\xC9\x45\x31\xC0\x31\xC9\x48\xC7\x45\x2A\x2A\x2A\x2A\x2A\x4C\x8D\x7D\x2A\xBA\x2A\x2A\x2A\x2A\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x4C\x8D\x2D\x2A\x2A\x2A\x2A\x4C\x89\xFF\x48\x89\x45\x2A\x4C\x89\xEE\xE8\x2A\x2A\x2A\x2A\x4C\x89\xFE\x4C\x89\xE7\xE8\x2A\x2A\x2A\x2A\x31\xF6\x4C\x89\xFF\xE8\x2A\x2A\x2A\x2A\x4C\x89\xEE\xE9\x2A\x2A\x2A\x2A\x66\x2E\x0F\x1F\x84\x00\x2A\x2A\x2A\x2A\x49\x8B\x34\x24\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 D4 53 48 89 F3 48 83 EC ? 4D 85 C0 0F 95 C2 48 85 F6 40 0F 94 C6 40 08 F2 75 ? 83 F9 ? 75 ? 49 89 FE 40 F6 C7 ? 75 ? 41 0F B6 54 24 ? 80 FA ? 0F 84 ? ? ? ? 80 FA ? 74 ? 80 FA ? 75 ? 49 8B 34 24 48 8D 05 ? ? ? ? 48 85 F6 48 0F 44 F0 48 89 DF 41 FF D6 48 83 C4 ? B8 ? ? ? ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 40 ? 48 8B 13 4C 8B 74 3A ? 41 0F B6 54 24 ? 80 FA ? 75 ? EB ? 0F 1F 00 48 83 C4 ? 31 C0 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 80 ? ? ? ? 45 31 C9 45 31 C0 31 C9 48 C7 45 ? ? ? ? ? 4C 8D 7D ? BA ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 4C 8D 2D ? ? ? ? 4C 89 FF 48 89 45 ? 4C 89 EE E8 ? ? ? ? 4C 89 FE 4C 89 E7 E8 ? ? ? ? 31 F6 4C 89 FF E8 ? ? ? ? 4C 89 EE E9 ? ? ? ? 66 2E 0F 1F 84 00 ? ? ? ? 49 8B 34 24 E9 ? ? ? ? CC CC CC CC CC CC CC 55 48 89 E5 41 57 41 56 41 55 41 54
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x4C\x89\x74\x24\x2A\x55\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x45\x33\xF6\x48\xC7\x45
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 4C 89 74 24 ? 55 48 8D 6C 24 ? 48 81 EC ? ? ? ? 45 33 F6 48 C7 45
</pre>
</td></tr></table>

### CBaseEntity_SetMoveType

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x48
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 89 D5 41 54 53 48 89 FB 48 83 EC 48
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

### CBaseEntity_SetParent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x74\x2A\x48\x8B\x47\x2A\xF6\x40\x2A\x2A\x75\x2A\x48\x8B\x46\x2A\xF6\x40\x2A\x2A\x75\x2A\xB8
</pre>
</td><td>
<pre>
48 85 F6 74 ? 48 8B 47 ? F6 40 ? ? 75 ? 48 8B 46 ? F6 40 ? ? 75 ? B8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4D\x8B\xD9\x48\x85\xD2\x74\x2A
</pre>
</td><td>
<pre>
4D 8B D9 48 85 D2 74 ?
</pre>
</td></tr></table>

### CBaseModelEntity_SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x84
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 48 85 C0 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x56\x57\x41\x57\x48\x8B\xEC\x48\x83\xEC
</pre>
</td><td>
<pre>
40 55 53 56 57 41 57 48 8B EC 48 83 EC
</pre>
</td></tr></table>

### CCSPlayerController_SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x0F\xB6\x87
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 0F B6 87
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

### CCSPlayer_WeaponServices_RemoveItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3
</pre>
</td><td>
<pre>
48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 54 49 89 FC 53 48 89 F3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xF9\xE8
</pre>
</td><td>
<pre>
48 85 D2 0F 84 ? ? ? ? 48 89 5C 24 ? 57 48 83 EC ? 48 8B DA 48 8B F9 E8
</pre>
</td></tr></table>

### CEntityIOOutput_FireOutputInternal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x4C\x8B\x05\x2A\x2A\x2A\x2A\x31\xD2
</pre>
</td><td>
<pre>
55 4C 8B 05 ? ? ? ? 31 D2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x56\x57\x48\x83\xEC\x2A\x4C\x89\x64\x24
</pre>
</td><td>
<pre>
40 53 56 57 48 83 EC ? 4C 89 64 24
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
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B D9 4C 8B C2
</pre>
</td></tr></table>

### CEntityInstance_AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x89\xF7\x48\x83\xEC
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 F7 41 56 41 55 41 54 53 48 89 FB 48 89 F7 48 83 EC
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

### CGameEntitySystem_FindEntityByClassName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x45\x31\xC0\x31\xC9\x48\x89\xE5\x53
</pre>
</td><td>
<pre>
55 45 31 C0 31 C9 48 89 E5 53
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x2A\x45\x33\xC9\xC6\x44\x24\x2A\x2A\x48\x8D\x4C\x24
</pre>
</td><td>
<pre>
48 83 EC ? 45 33 C9 C6 44 24 ? ? 48 8D 4C 24
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
\x48\x81\xEC\x2A\x2A\x2A\x2A\x4D\x85\xC0\x75
</pre>
</td><td>
<pre>
48 81 EC ? ? ? ? 4D 85 C0 75
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

### CHostStateMgr::StartNewRequest

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x83\x7F
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 83 7F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x33\xF6\x48\x8B\xFA\x48\x39\x35
</pre>
</td><td>
<pre>
48 89 74 24 ? 57 48 83 EC ? 33 F6 48 8B FA 48 39 35
</pre>
</td></tr></table>

### CSource2Server::Init

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x83\x38
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 53 48 83 EC ? 48 8D 05 ? ? ? ? 48 83 38
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x2A\x48\x83\x3D\x2A\x2A\x2A\x2A\x2A\x74\x2A\x33\xC9\xE8\x2A\x2A\x2A\x2A\xFF\x15
</pre>
</td><td>
<pre>
48 83 EC ? 48 83 3D ? ? ? ? ? 74 ? 33 C9 E8 ? ? ? ? FF 15
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
\x48\x83\xEC\x2A\xC6\x44\x24\x2A\x2A\x4C\x8B\xC1
</pre>
</td><td>
<pre>
48 83 EC ? C6 44 24 ? ? 4C 8B C1
</pre>
</td></tr></table>

### DispatchSpawn

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
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x48\x85\xD2
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B DA 48 8B F9 48 85 C9 0F 84 ? ? ? ? 48 85 D2
</pre>
</td></tr></table>

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x31\xD2\x48\x89\xE5\x53\x89\xFB
</pre>
</td><td>
<pre>
55 31 D2 48 89 E5 53 89 FB
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

### LogDirect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Linux</td><td>tier0</td><td>
<pre>
\x55\x89\xD0\x48\x89\xE5\x41\x57\x41\x56\x41\x55
</pre>
</td><td>
<pre>
55 89 D0 48 89 E5 41 57 41 56 41 55
</pre>
</td></tr><tr><td>❓</td><td>Windows</td><td>tier0</td><td>
<pre>
\x4C\x89\x4C\x24\x20\x44\x89\x44\x24\x18\x89\x54\x24\x10\x55
</pre>
</td><td>
<pre>
4C 89 4C 24 20 44 89 44 24 18 89 54 24 10 55
</pre>
</td></tr></table>

### PreloadLibrary

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x4C\x24\x2A\x53\x56\x57\x48\x83\xEC\x2A\x48\x8B\xF1
</pre>
</td><td>
<pre>
48 89 4C 24 ? 53 56 57 48 83 EC ? 48 8B F1
</pre>
</td></tr></table>

### ReplyConnection

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 66 0F EF C0 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x8B\xC4\x55\x41\x55\x41\x56
</pre>
</td><td>
<pre>
48 8B C4 55 41 55 41 56
</pre>
</td></tr></table>

### UTIL_Remove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x89\xFE\x48\x85\xFF
</pre>
</td><td>
<pre>
48 89 FE 48 85 FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x85\xC9\x74\x2A\x48\x8B\xD1\x48\x8B\x0D
</pre>
</td><td>
<pre>
48 85 C9 74 ? 48 8B D1 48 8B 0D
</pre>
</td></tr></table>

