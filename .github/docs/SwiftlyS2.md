# SwiftlyS2 

Last updated: October 15, 2025 at 7:10:00 PM UTC

* Manifests: [8823131850246373323](https://steamdb.info/depot/2347771/history/?changeid=M:8823131850246373323), [1602756282803538628](https://steamdb.info/depot/2347773/history/?changeid=M:1602756282803538628), [8910996202863983657](https://steamdb.info/depot/2347770/history/?changeid=M:8910996202863983657)
* Repository: https://github.com/swiftly-solution/swiftlys2
* Gamedata: https://github.com/swiftly-solution/swiftlys2/blob/master/plugin_files/gamedata/cs2/core/signatures.jsonc

## Signatures

### CBaseModelEntity::SetModel

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

### BotNavIgnore1

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

### BotNavIgnore2

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

### BotNavIgnore3

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

### CAttributeList::SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x83\xEC\x78
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 49 89 F4 53 48 83 EC 78
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x55\x41\x56\x48\x81\xEC\x90\x00\x00\x00
</pre>
</td><td>
<pre>
40 53 55 41 56 48 81 EC 90 00 00 00
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
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x30\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 30 48 8B DA 48 8B F9 48 85 C9
</pre>
</td></tr></table>

### CBaseEntity::TakeDamage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x85\xD2
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 F6 41 55 41 54 49 89 D4 53 48 89 FB 48 83 EC ? 48 85 D2
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

### CBaseModelEntity::SetBodygroup

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xF5\x41\x54\x41\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 F5 41 54 41 89 D4 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 48 85 C0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x20\x41\x8B\xF8\x48\x8B\xF2\x48\x8B\xD9\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 57 48 83 EC 20 41 8B F8 48 8B F2 48 8B D9 E8 ? ? ? ?
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

### CCSPlayerController::ProcessUserCmd

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

### CCSPlayerPawnBase::PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x40\xE8\x2A\x2A\x2A\x2A\xF3\x0F\x10\x83
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC 40 E8 ? ? ? ? F3 0F 10 83
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

### CCSPlayer_ItemServices::CanAcquire

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

### CEntityIdentity::AcceptInput

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

### CEntitySystem::AddEntityIOEvent

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

### CLoggingSystem::LogDirect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>❓</td><td>Linux</td><td>tier0</td><td>
<pre>
\x55\x49\x89\xFA\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xD6
</pre>
</td><td>
<pre>
55 49 89 FA 48 89 E5 41 57 41 56 41 89 D6
</pre>
</td></tr><tr><td>❓</td><td>Windows</td><td>tier0</td><td>
<pre>
\x4C\x89\x4C\x24\x2A\x44\x89\x44\x24\x2A\x89\x54\x24\x2A\x55
</pre>
</td><td>
<pre>
4C 89 4C 24 ? 44 89 44 24 ? 89 54 24 ? 55
</pre>
</td></tr></table>

### CTakeDamageInfo::Constructor

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

### Cmd_ExecuteCommand

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xF6\x41\x55\x49\x89\xFD\x41\x54\x4D\x89\xC4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 F6 41 55 49 89 FD 41 54 4D 89 C4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x4C\x89\x4C\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24
</pre>
</td><td>
<pre>
48 89 5C 24 ? 4C 89 4C 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24
</pre>
</td></tr></table>

### IGameSystem::InitAllSystems->pFirst

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

### IGameSystem::LoopDestroyAllSystems->s_GameSystems

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

### IGameSystem::LoopPostInitAllSystems->pEventDispatcher

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

### INetworkMessageProcessingPreFilter::FilterMessage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x89\xF7\x48\x83\xEC\x2A\x48\x8B\x06\xFF\x50\x2A\x48\x89\xC2\x31\xC0\x48\x39\x15\x2A\x2A\x2A\x2A\x74\x2A\x48\x8B\x5D\x2A\xC9\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x8B\x3D\x2A\x2A\x2A\x2A\xBE\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8B\x43\x2A\x4C\x8D\x05\x2A\x2A\x2A\x2A\xBE\x2A\x2A\x2A\x2A\x0F\xB7\x4B
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 89 F7 48 83 EC ? 48 8B 06 FF 50 ? 48 89 C2 31 C0 48 39 15 ? ? ? ? 74 ? 48 8B 5D ? C9 C3 0F 1F 80 ? ? ? ? 8B 3D ? ? ? ? BE ? ? ? ? E8 ? ? ? ? 84 C0 74 ? 48 8B 43 ? 4C 8D 05 ? ? ? ? BE ? ? ? ? 0F B7 4B
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\x02\x48\x8B\xD9\x48\x8B\xCA
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B 02 48 8B D9 48 8B CA
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

### TracePlayerBBox

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x49\x89\xCE\x41\x55\x49\x89\xD5
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 49 89 CE 41 55 49 89 D5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x89\x44\x24\x18\x55\x53\x56\x57\x41\x55\x41\x56\x48\x8D\xAC\x24\xF8\xFE\xFF\xFF
</pre>
</td><td>
<pre>
4C 89 44 24 18 55 53 56 57 41 55 41 56 48 8D AC 24 F8 FE FF FF
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
\x48\x89\x5C\x24\x20\x48\x89\x4C\x24\x08\x55\x57
</pre>
</td><td>
<pre>
48 89 5C 24 20 48 89 4C 24 08 55 57
</pre>
</td></tr></table>

### UTIL::CreateEntityByName

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

### UTIL::Remove

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

