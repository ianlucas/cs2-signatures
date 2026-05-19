# Plugify 

Last updated: May 19, 2026 at 10:27:08 PM GMT

* Manifests: [2040174343226015246](https://steamdb.info/depot/2347770/history/?changeid=M:2040174343226015246), [2946404506655889380](https://steamdb.info/depot/2347771/history/?changeid=M:2946404506655889380), [5214061773672293775](https://steamdb.info/depot/2347773/history/?changeid=M:5214061773672293775)
* Repository: https://github.com/untrustedmodders/plugify-source-2
* Gamedata: https://github.com/untrustedmodders/plugify-source-2/blob/main/assets/gamedata.jsonc

## Signatures

### ServerMovementUnlock

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>⚠️(2)</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\x87\x2A\x2A\x2A\x2A\xF3\x0F\x12\xC2
</pre>
</td><td>
<pre>
0F 87 ? ? ? ? F3 0F 12 C2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x0F\x86\x2A\x2A\x2A\x2A\x0F\x57\xC0\x0F\x2E\xC2
</pre>
</td><td>
<pre>
0F 86 ? ? ? ? 0F 57 C0 0F 2E C2
</pre>
</td></tr></table>

### BotNavIgnore

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB8\x2A\x2A\x2A\x2A\x45\x84\xFF\x0F\x84
</pre>
</td><td>
<pre>
0F 84 ? ? ? ? 44 0F B6 B8 ? ? ? ? 45 84 FF 0F 84
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

### CBaseEntity::EmitSoundFilter

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

### CBaseEntity::SetMoveType

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x41\x89\xD4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8D\xBB\x2A\x2A\x2A\x2A\x44\x89\xE6\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 41 89 D4 53 48 89 FB 48 81 EC ? ? ? ? E8 ? ? ? ? 48 8D BB ? ? ? ? 44 89 E6 E8
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

### CBasePlayerController::SetPawn

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

### CCSPlayerController::SwitchTeam

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

### CCSPlayer_ItemServices::CanAcquire

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

### CCSPlayer_WeaponServices::RemoveItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\xE8\x2A\x2A\x2A\x2A\x48\x39\xC3
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 FC 53 48 89 F3 E8 ? ? ? ? 48 39 C3
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

### CCSPlayer_WeaponServices::Weapon_Equip

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

### CEntityIOOutput::FireOutputInternal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8D\x05
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 49 89 D4 53 48 89 F3 48 83 EC ? 48 8D 05
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

### CEntityInstance::AcceptInput

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

### CGameEntitySystem::CreateEntityByName

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

### CGameEntitySystem::DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x85\xF6\x74\x2A\x4C\x8D\x2D
</pre>
</td><td>
<pre>
48 85 FF 74 ? 55 48 89 E5 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 85 F6 74 ? 4C 8D 2D
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

### CGameRules::TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xF3\x0F\x11\x85
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 53 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 11 85
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x56\x41\x56
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 56 41 56
</pre>
</td></tr></table>

### CHostStateMgr::StartNewRequest

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x18\x48\x83\x7F\x30\x00
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC 18 48 83 7F 30 00
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

### CNetworkGameServer::ReplyConnection

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

### CSScript::ResolveModule

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\xB5\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x89\xC7
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 F7 41 56 41 55 41 54 53 48 89 FB 48 81 EC ? ? ? ? 48 89 B5 ? ? ? ? E8 ? ? ? ? 48 89 C7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x49\x8B\xF8
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 49 8B F8
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

### CheckJumpButtonWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\xC8\x42\x41\xC7\x85\x2A\x2A\x2A\x2A\x00\x00\x00\x00\x41\xC7\x85\x2A\x2A\x2A\x2A\x00\x00\x00\x00\xE9
</pre>
</td><td>
<pre>
C8 42 41 C7 85 ? ? ? ? 00 00 00 00 41 C7 85 ? ? ? ? 00 00 00 00 E9
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xC8\x42\xEB\x2A\x4C\x8B\x77\x2A\x4D\x39\x66
</pre>
</td><td>
<pre>
C8 42 EB ? 4C 8B 77 ? 4D 39 66
</pre>
</td></tr></table>

### EmitSoundVolume

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\xE8\x2A\x2A\x2A\x2A\xF3\x0F\x6F\x03\x48\x83\xEC\x2A\x45\x31\xC9\x89\xC2\x45\x31\xC0\x4C\x89\xFE\x0F\x11\x04\x24\x8B\x43\x2A\x4C\x89\xE7
</pre>
</td><td>
<pre>
E8 ? ? ? ? F3 0F 6F 03 48 83 EC ? 45 31 C9 89 C2 45 31 C0 4C 89 FE 0F 11 04 24 8B 43 ? 4C 89 E7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x41\xB9\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x2A\x49\x8B\xD5
</pre>
</td><td>
<pre>
41 B9 ? ? ? ? 48 89 5C 24 ? 49 8B D5
</pre>
</td></tr></table>

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\x3E\x2A\x75\x2A\x31\xC0\x48\x81\xC4\x2A\x2A\x2A\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x4C\x8D\xA5
</pre>
</td><td>
<pre>
48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 81 EC ? ? ? ? 80 3E ? 75 ? 31 C0 48 81 C4 ? ? ? ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 80 ? ? ? ? 4C 8D A5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x33\xFF\x4C\x8B\xCA\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 33 FF 4C 8B CA 8B D9
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
\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x83\xF9\x2A\x77
</pre>
</td><td>
<pre>
48 8B 15 ? ? ? ? 48 85 D2 74 ? 83 F9 ? 77
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

### VScriptInitialization

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>vscript</td><td>
<pre>
\x83\xFE\x01\x0F\x84\x2A\x2A\x2A\x2A\x83\xFE\x02\x0F\x85\x2A\x2A\x2A\x2A\xBF\x2A\x2A\x2A\x2A\xE8
</pre>
</td><td>
<pre>
83 FE 01 0F 84 ? ? ? ? 83 FE 02 0F 85 ? ? ? ? BF ? ? ? ? E8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>vscript</td><td>
<pre>
\xBE\x2A\x2A\x2A\x2A\x2B\xD6
</pre>
</td><td>
<pre>
BE ? ? ? ? 2B D6
</pre>
</td></tr></table>

