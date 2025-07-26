# plugify 

Last updated: July 26, 2025 at 4:03:56 PM UTC

* Manifests: [366892905078765270](https://steamdb.info/depot/2347771/history/?changeid=M:366892905078765270), [6261982168194353241](https://steamdb.info/depot/2347773/history/?changeid=M:6261982168194353241), [5023020258185551340](https://steamdb.info/depot/2347770/history/?changeid=M:5023020258185551340)
* Repository: https://github.com/untrustedmodders/plugify-source-2
* Gamedata: https://github.com/untrustedmodders/plugify-source-2/blob/main/assets/gamedata.jsonc

## Signatures

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
</td></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x57\x48\x83\xEC\x20\x48\x83\x3D\xBA\x5A\xEC\x00\x00
</pre>
</td><td>
<pre>
40 57 48 83 EC 20 48 83 3D BA 5A EC 00 00
</pre>
</td></tr></table>

### CBaseModelEntity_SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅⚠️(2)</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x41\x54\x49\x89\xFC\x48\x8D\x7D\xE0\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x30\x48\x8B\x06
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 41 54 49 89 FC 48 8D 7D E0 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B 30 48 8B 06
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x7C\x24\x2A\x55\x48\x8B\xEC\x48\x83\xEC\x50\x48\x8B\xF9\x4C\x8B\xC2
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 7C 24 ? 55 48 8B EC 48 83 EC 50 48 8B F9 4C 8B C2
</pre>
</td></tr></table>

### AppSystemCreateInterfaceFn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x8D\x7D\xDE
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 FC 53 48 8D 7D DE
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
\x55\x48\x89\xE5\x41\x56\x49\x89\xD6\x41\x55\x41\x89\xF5\x41\x54\x48\x8D\x35\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 D6 41 55 41 89 F5 41 54 48 8D 35 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x56\x48\x83\xEC\x30\x48\x8B\xEA
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 56 48 83 EC 30 48 8B EA
</pre>
</td></tr></table>

### CBaseEntity_EmitSoundParams

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 48 89 E5 41 55 41 54 49 89 FC 53 48 89 F3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x10\x48\x89\x70\x18\x55\x57\x41\x56\x48\x8D\xA8\x08\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 10 48 89 70 18 55 57 41 56 48 8D A8 08 FF FF FF
</pre>
</td></tr></table>

### CBaseEntity_SetMoveType

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 89 D5 41 54 49 89 FC 53 48 83 EC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x41\x0F\xB6\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 41 0F B6 F0
</pre>
</td></tr></table>

### CBaseEntity_SetParent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x74\x2A\x48\x8B\x47\x10\xF6\x40\x31\x02\x75\x2A\x48\x8B\x46\x10\xF6\x40\x31\x02\x75\x2A\xB8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 85 F6 74 ? 48 8B 47 10 F6 40 31 02 75 ? 48 8B 46 10 F6 40 31 02 75 ? B8 ? ? ? ?
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

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x45\x89\xC4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 45 89 C4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x2A\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\xF9
</pre>
</td><td>
<pre>
48 89 74 24 ? 55 41 54 41 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B F9
</pre>
</td></tr></table>

### CCSPlayerController_SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xFD\x89\xF7
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 FD 89 F7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9\x8B\xF2\x8B\xCA
</pre>
</td><td>
<pre>
40 56 57 48 81 EC ? ? ? ? 48 8B F9 8B F2 8B CA
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices_RemoveItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\x2A\x41\x2A\x49\x89\x2A\x41\x2A\x49\x89\x2A\xE8\x2A\x2A\x2A\x2A\x49\x39
</pre>
</td><td>
<pre>
55 48 89 ? 41 ? 49 89 ? 41 ? 49 89 ? E8 ? ? ? ? 49 39
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
\x4C\x89\x4C\x24\x20\x53\x55\x57\x41\x54\x41\x56\x48\x81\xEC
</pre>
</td><td>
<pre>
4C 89 4C 24 20 53 55 57 41 54 41 56 48 81 EC
</pre>
</td></tr></table>

### CEntityIdentity_SetEntityName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x41\x54\x49\x89\xFC\x48\x8D\x7D\xE0\x48\x83\xEC\x18\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x30\xE8\x2A\x2A\x2A\x2A\x48\x8B\x45\xE0
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 41 54 49 89 FC 48 8D 7D E0 48 83 EC 18 48 8D 05 ? ? ? ? 48 8B 30 E8 ? ? ? ? 48 8B 45 E0
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
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x48\x8D\x7D\xC0
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 48 8D 7D C0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x83\xEC\x40\x49\x8B\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 57 48 83 EC 40 49 8B F0
</pre>
</td></tr></table>

### CGameEntitySystem_FindEntityByClassName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x45\x31\xC0\x31\xC9\x48\x89\xE5\x41\x54
</pre>
</td><td>
<pre>
55 45 31 C0 31 C9 48 89 E5 41 54
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
\x48\x85\xD2\x74\x2A\x55\x48\x89\xE5\x41\x54
</pre>
</td><td>
<pre>
48 85 D2 74 ? 55 48 89 E5 41 54
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

### CGameRules_TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x88\x00\x00\x00\x48\x8D\x05\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC 88 00 00 00 48 8D 05 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x41\x55
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 ? 48 89 48 ? 55 41 55
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

### DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x56
</pre>
</td><td>
<pre>
48 85 FF 74 ? 55 48 89 E5 41 56
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

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xFE\x41\x55\x41\x54\x45
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 FE 41 55 41 54 45
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xFA\x8B\xF1\x48\x85\xD2\x0F\x84
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B FA 8B F1 48 85 D2 0F 84
</pre>
</td></tr></table>

### HostStateRequest

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x83\x7F
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 83 7F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x30\x33\xF6\x48\x8B\xFA
</pre>
</td><td>
<pre>
48 89 74 24 10 57 48 83 EC 30 33 F6 48 8B FA
</pre>
</td></tr></table>

### LegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x85\xFF
</pre>
</td><td>
<pre>
48 8B 05 ? ? ? ? 48 85 C0 74 ? 85 FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x85\xC9\x74
</pre>
</td><td>
<pre>
48 8B 15 ? ? ? ? 48 85 D2 74 ? 85 C9 74
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
\x48\x89\x4C\x24\x08\x53\x56\x57\x48\x83\xEC\x60
</pre>
</td><td>
<pre>
48 89 4C 24 08 53 56 57 48 83 EC 60
</pre>
</td></tr></table>

### ReplyConnection

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\xB9\x00\x01\x00\x00
</pre>
</td><td>
<pre>
55 B9 00 01 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x8B\xC4\x55\x41\x54\x41\x55\x41\x57
</pre>
</td><td>
<pre>
48 8B C4 55 41 54 41 55 41 57
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

