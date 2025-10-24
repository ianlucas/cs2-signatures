# plugify 

Last updated: October 24, 2025 at 10:04:11 PM UTC

* Manifests: [154804687359957018](https://steamdb.info/depot/2347770/history/?changeid=M:154804687359957018), [9212826508403275891](https://steamdb.info/depot/2347771/history/?changeid=M:9212826508403275891), [4476430123924488526](https://steamdb.info/depot/2347773/history/?changeid=M:4476430123924488526)
* Repository: https://github.com/untrustedmodders/plugify-source-2
* Gamedata: https://github.com/untrustedmodders/plugify-source-2/blob/main/assets/gamedata.jsonc

## Signatures

### CBaseEntity::EmitSoundParams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xF3\x48\x83\xEC\x18\x4D\x85\xC0\x0F\x95\xC2\x48\x85\xF6\x40\x0F\x94\xC6\x40\x08\xF2\x75\x2A\x83\xF9\x01\x75\x2A\x49\x89\xFE\x40\xF6\xC7\x01\x75\x2A\x41\x0F\xB6\x54\x24\x08\x80\xFA\x1E\x0F\x84\x2A\x2A\x2A\x2A\x80\xFA\x02\x74\x2A\x80\xFA\x4F\x75\x2A\x49\x8B\x34\x24\x48\x8D\x05\xBF\xA5\xB8\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 D4 53 48 89 F3 48 83 EC 18 4D 85 C0 0F 95 C2 48 85 F6 40 0F 94 C6 40 08 F2 75 ? 83 F9 01 75 ? 49 89 FE 40 F6 C7 01 75 ? 41 0F B6 54 24 08 80 FA 1E 0F 84 ? ? ? ? 80 FA 02 74 ? 80 FA 4F 75 ? 49 8B 34 24 48 8D 05 BF A5 B8 FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xF9\x41\x83\xF9\x2A\x75\x2A\x48\x83\x7C\x24\x2A\x2A\x75\x2A\x48\x85\xD2\x74\x2A\x49\x8B\xC8\xE8\x2A\x2A\x2A\x2A\x48\x8B\xD0\x48\x8B\xCB\xFF\xD7\xB0\x2A\x48\x8B\x5C\x24\x2A\x48\x83\xC4\x2A\x5F\xC3\x48\x8B\x5C\x24\x2A\x32\xC0\x48\x83\xC4\x2A\x5F\xC3\xCC\xCC\xCC\x48\x83\xEC\x2A\x4C\x8B\xD2\x4C\x8B\xD9\x41\x83\xF9\x2A\x75\x2A\x48\x83\x7C\x24\x2A\x2A\x75\x2A\x48\x85\xD2\x74\x2A\x49\x8B\x00
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B DA 48 8B F9 41 83 F9 ? 75 ? 48 83 7C 24 ? ? 75 ? 48 85 D2 74 ? 49 8B C8 E8 ? ? ? ? 48 8B D0 48 8B CB FF D7 B0 ? 48 8B 5C 24 ? 48 83 C4 ? 5F C3 48 8B 5C 24 ? 32 C0 48 83 C4 ? 5F C3 CC CC CC 48 83 EC ? 4C 8B D2 4C 8B D9 41 83 F9 ? 75 ? 48 83 7C 24 ? ? 75 ? 48 85 D2 74 ? 49 8B 00
</pre>
</td></tr></table>

### CGameEntitySystem::FindEntityByClassName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅⚠️(2)</td><td>Linux</td><td>server</td><td>
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

### CBaseEntity::DispatchSpawn

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
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x48\x85\xD2
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B DA 48 8B F9 48 85 C9 0F 84 ? ? ? ? 48 85 D2
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

### CBaseEntity::SetParent

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

### CBaseModelEntity::SetModel

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
\x44\x88\x4C\x24\x2A\x53\x57
</pre>
</td><td>
<pre>
44 88 4C 24 ? 53 57
</pre>
</td></tr></table>

### CCSGameRules::HandleSwapTeams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x45\x31\xF6\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8D\x25
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 45 31 F6 41 55 41 54 53 48 81 EC ? ? ? ? 4C 8D 25
</pre>
</td></tr></table>

### CCSGameRules::OnTeamsSwappedAtRoundReset

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x8B\x97\x2A\x2A\x2A\x2A\x8D\x4A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 8B 97 ? ? ? ? 8D 4A
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
\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\xE8
</pre>
</td><td>
<pre>
48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 54 49 89 FC 53 48 89 F3 E8
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
</td></tr></table>

### CEconItemSchema::GetItemDefinitionByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x80\xBF\x2A\x2A\x2A\x2A\x00\x75
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 80 BF ? ? ? ? 00 75
</pre>
</td></tr></table>

### CEntityIOOutput::FireOutputInternal

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

### CEntityIdentity::SetEntityName

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

### CEntityInstance::AcceptInput

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

### CGameEntitySystem::FindEntityByName

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

### CGameRules::TerminateRound

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
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\xB5
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 F6 41 55 41 54 53 48 89 FB 48 81 EC ? ? ? ? 48 89 B5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x53\x56\x57\x41\x55\x41\x56\x48\x8D\xAC\x24
</pre>
</td><td>
<pre>
48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 55 41 56 48 8D AC 24
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

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x31\xD2\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x41\x89\xFC
</pre>
</td><td>
<pre>
55 31 D2 48 89 E5 41 57 41 56 41 55 41 54 41 89 FC
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
\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x83\xF9\x2A\x77\x2A\x48\x63\xC1\x48\xC1\xE0
</pre>
</td><td>
<pre>
48 8B 15 ? ? ? ? 48 85 D2 74 ? 83 F9 ? 77 ? 48 63 C1 48 C1 E0
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

