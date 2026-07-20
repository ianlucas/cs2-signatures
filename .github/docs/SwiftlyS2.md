# SwiftlyS2

Last updated: July 20, 2026 at 11:13:32 PM GMT

* Manifests: [1756429801267405217](https://steamdb.info/depot/2347771/history/?changeid=M:1756429801267405217), [4042805601783611185](https://steamdb.info/depot/2347773/history/?changeid=M:4042805601783611185), [7673916425787288234](https://steamdb.info/depot/2347770/history/?changeid=M:7673916425787288234)
* Repository: https://github.com/swiftly-solution/swiftlys2

## master

* Gamedata: https://github.com/swiftly-solution/swiftlys2/blob/master/plugin_files/gamedata/cs2/core/signatures.jsonc

### CCSPlayer_MovementServices::CheckWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>❌</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 54 49 89 F4 53 48 89 FB 48 81 EC ? ? ? ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x55\x48\x8D\x6C\x24</pre></td><td><pre>48 8B C4 48 89 58 ? 55 48 8D 6C 24</pre></td></tr>
</table>

### BotNavIgnore1

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB8\x2A\x2A\x2A\x2A\x45\x84\xFF\x0F\x84</pre></td><td><pre>0F 84 ? ? ? ? 44 0F B6 B8 ? ? ? ? 45 84 FF 0F 84</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x2A\x74</pre></td><td><pre>0F 84 ? ? ? ? 80 B8 ? ? ? ? ? 0F 84 ? ? ? ? 80 3D ? ? ? ? ? 74</pre></td></tr>
</table>

### BotNavIgnore2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB8\x2A\x2A\x2A\x2A\x45\x84\xFF\x0F\x84</pre></td><td><pre>0F 84 ? ? ? ? 44 0F B6 B8 ? ? ? ? 45 84 FF 0F 84</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x2A\x74</pre></td><td><pre>0F 84 ? ? ? ? 80 B8 ? ? ? ? ? 0F 84 ? ? ? ? 80 3D ? ? ? ? ? 74</pre></td></tr>
</table>

### BotNavIgnore3

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB8\x2A\x2A\x2A\x2A\x45\x84\xFF\x0F\x84</pre></td><td><pre>0F 84 ? ? ? ? 44 0F B6 B8 ? ? ? ? 45 84 FF 0F 84</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x2A\x74</pre></td><td><pre>0F 84 ? ? ? ? 80 B8 ? ? ? ? ? 0F 84 ? ? ? ? 80 3D ? ? ? ? ? 74</pre></td></tr>
</table>

### CAttributeList::SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x2A\xF3\x0F\x11\x85</pre></td><td><pre>55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 89 F3 48 83 EC ? F3 0F 11 85</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x55\x41\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x74\x24</pre></td><td><pre>40 53 55 41 56 48 81 EC ? ? ? ? 0F 29 74 24</pre></td></tr>
</table>

### CBaseEntity::DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC</pre></td><td><pre>48 85 FF 74 ? 55 48 89 E5 41 55 41 54 49 89 FC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x30\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9</pre></td><td><pre>48 89 5C 24 10 57 48 83 EC 30 48 8B DA 48 8B F9 48 85 C9</pre></td></tr>
</table>

### CBaseEntity::TakeDamage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x31\xFF</pre></td><td><pre>55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 49 89 FD 31 FF</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x54\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4D\x8B\xE0</pre></td><td><pre>40 55 53 56 57 41 54 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4D 8B E0</pre></td></tr>
</table>

### CBaseModelEntity::SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8D\x54\x24\x2A\x48\x8B\x01\xFF\x50\x2A\x48\x8B\x54\x24\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x2A\x5B\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x89\x5C\x24</pre></td><td><pre>40 53 48 83 EC ? 48 8B D9 4C 8B C2 48 8B 0D ? ? ? ? 48 8D 54 24 ? 48 8B 01 FF 50 ? 48 8B 54 24 ? 48 8B CB E8 ? ? ? ? 48 83 C4 ? 5B C3 CC CC CC CC CC CC CC CC CC CC CC CC CC CC CC 48 89 5C 24</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x38\x48\x8B\x07\xFF\x50\x2A\x48\x89\xDF\x48\x8B\x5D\x2A\xC9\x48\x89\xC6\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\x55</pre></td><td><pre>55 48 89 E5 53 48 89 FB 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B 38 48 8B 07 FF 50 ? 48 89 DF 48 8B 5D ? C9 48 89 C6 E9 ? ? ? ? CC CC CC CC 55</pre></td></tr>
</table>

### CBasePlayerController::OnSimulateUserCommands

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8D\x35\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\x8D\x85\x2A\x2A\x2A\x2A\x48\x89\xC2\x48\x89\x85\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\xBB</pre></td><td><pre>55 48 8D 05 ? ? ? ? 48 8D 35 ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 81 EC ? ? ? ? 48 89 85 ? ? ? ? 48 8D 05 ? ? ? ? C7 85 ? ? ? ? ? ? ? ? 48 89 85 ? ? ? ? 48 8D 85 ? ? ? ? 48 89 C2 48 89 85 ? ? ? ? E8 ? ? ? ? 48 8B BB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x54\x41\x56\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC</pre></td><td><pre>40 55 53 56 57 41 54 41 56 48 8D AC 24 ? ? ? ? 48 81 EC</pre></td></tr>
</table>

### CBasePlayerController::SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x87\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xCE\x41\x55\x45\x89\xCD</pre></td><td><pre>55 48 8D 87 ? ? ? ? 48 89 E5 41 57 41 56 41 89 CE 41 55 45 89 CD</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x44\x88\x4C\x24\x2A\x53\x57\x41\x54\x41\x56\x41\x57\x48\x83\xEC</pre></td><td><pre>44 88 4C 24 ? 53 57 41 54 41 56 41 57 48 83 EC</pre></td></tr>
</table>

### CCSPlayerController::ProcessUserCmd

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x89\x4D</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 89 4D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x44\x88\x48\x20\x44\x89\x40\x18\x48\x89\x50\x10\x53</pre></td><td><pre>48 8B C4 44 88 48 20 44 89 40 18 48 89 50 10 53</pre></td></tr>
</table>

### CCSPlayerController::SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x89\xF7</pre></td><td><pre>55 48 89 E5 41 54 49 89 FC 89 F7</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xD9\x8B\xFA</pre></td><td><pre>40 53 57 48 81 EC ? ? ? ? 48 8B D9 8B FA</pre></td></tr>
</table>

### CCSPlayerPawn::CanMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x0F\xB6\x10\x31\xC0</pre></td><td><pre>55 BE ? ? ? ? 48 89 E5 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC ? E8 ? ? ? ? 48 85 C0 74 ? 0F B6 10 31 C0</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x57\x48\x83\xEC\x30\x48\x8B\xF9\xBA\xFF\xFF\xFF\xFF</pre></td><td><pre>40 57 48 83 EC 30 48 8B F9 BA FF FF FF FF</pre></td></tr>
</table>

### CCSPlayerPawn::PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x80\xBB</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 80 BB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x41\x54\x48\x8B\xEC</pre></td><td><pre>40 55 56 41 54 48 8B EC</pre></td></tr>
</table>

### CCSPlayer_ItemServices::CanAcquire

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 CD 41 54 49 89 FC 53 48 89 F3 48 83 EC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x44\x89\x44\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x53\x56\x57\x41\x55\x41\x56\x41\x57\x48\x8B\xEC</pre></td><td><pre>44 89 44 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 55 41 56 41 57 48 8B EC</pre></td></tr>
</table>

### CCSPlayer_MovementServices::AirAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x49\x89\xD5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 55 49 89 D5 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\xF3\x0F\x11\x5C\x24\x20\x53\x56\x57\x48\x83\xEC\x60</pre></td><td><pre>F3 0F 11 5C 24 20 53 56 57 48 83 EC 60</pre></td></tr>
</table>

### CCSPlayer_MovementServices::AirMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xB5\x2A\x2A\x2A\x2A\x41\x55\x41\x54</pre></td><td><pre>55 48 8D 15 ? ? ? ? 48 89 E5 41 57 41 56 4C 8D B5 ? ? ? ? 41 55 41 54</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x53\x55\x56\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70</pre></td><td><pre>48 8B C4 53 55 56 57 48 81 EC ? ? ? ? 0F 29 70</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CanUnduck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 81 EC ? ? ? ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x41\x55\x48\x8D\xAC\x24</pre></td><td><pre>40 55 56 41 55 48 8D AC 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CategorizePosition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 41 89 D5</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x57\x41\x54\x41\x55\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9</pre></td><td><pre>40 55 56 57 41 54 41 55 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 48 8B F9</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckFalling

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x07\xFF\x90\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\xF3\x0F\x10\x8B</pre></td><td><pre>55 48 89 E5 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 0F 84 ? ? ? ? 48 8B 07 FF 90 ? ? ? ? 48 85 C0 0F 84 ? ? ? ? F3 0F 10 8B</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x83\x79</pre></td><td><pre>40 55 57 48 81 EC ? ? ? ? 48 83 79</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckJumpButtonLegacy

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\xBE\x02\x00\x00\x00\x53\x48\x89\xFB\x48\x83\xEC\x68</pre></td><td><pre>55 48 89 E5 41 55 41 54 49 89 F4 BE 02 00 00 00 53 48 89 FB 48 83 EC 68</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xEA</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 57 48 83 EC ? 48 8B EA</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckJumpButtonModern

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\x75\x90\x41\x55\x41\x54\x49\x89\xF4</pre></td><td><pre>55 48 89 E5 41 57 41 56 4C 8D 75 90 41 55 41 54 49 89 F4</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x8B\x9A</pre></td><td><pre>40 55 53 56 57 41 54 41 55 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 8B 9A</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckParameters

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x49\x8B\x44\x24</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 81 EC ? ? ? ? E8 ? ? ? ? 49 8B 44 24</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\x68\xA1</pre></td><td><pre>48 8B C4 55 53 56 57 41 56 41 57 48 8D 68 A1</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x49\x89\xF4\x53\x48\x83\xEC\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 49 89 F4 53 48 83 EC ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x4C\x89\x40\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x68</pre></td><td><pre>48 8B C4 48 89 58 ? 4C 89 40 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 68</pre></td></tr>
</table>

### CCSPlayer_MovementServices::Duck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xF3\x0F\x10\x05</pre></td><td><pre>55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 89 F3 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 10 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\xB9</pre></td><td><pre>48 8B C4 55 53 56 57 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 80 B9</pre></td></tr>
</table>

### CCSPlayer_MovementServices::Friction

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\x47</pre></td><td><pre>55 48 89 E5 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 8B 47</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x83\x79\x2A\x2A\x48\x8B\xFA\x0F\x29\x7C\x24</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 83 79 ? ? 48 8B FA 0F 29 7C 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::FullWalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x84\xD2</pre></td><td><pre>55 48 89 E5 41 54 49 89 F4 53 48 89 FB 84 D2</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xFA\x48\x8B\xD9\x45\x84\xC0\x75</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 8B FA 48 8B D9 45 84 C0 75</pre></td></tr>
</table>

### CCSPlayer_MovementServices::GroundAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x0F\x28\xF1\x48\x89\xE5</pre></td><td><pre>55 0F 28 F1 48 89 E5</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x41\x54\x41\x55\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\xF2\x41\x0F\x10\x01</pre></td><td><pre>40 53 41 54 41 55 41 57 48 81 EC ? ? ? ? F2 41 0F 10 01</pre></td></tr>
</table>

### CCSPlayer_MovementServices::LadderMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x2A\x2A\x2A\x2A\x41\x54\x49\x89\xF4</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD ? ? ? ? 41 54 49 89 F4</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9</pre></td><td><pre>40 55 53 56 57 41 57 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 48 8B F9</pre></td></tr>
</table>

### CCSPlayer_MovementServices::MoveInit

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\xBE\x2A\x2A\x2A\x2A\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x4C\x89\xE7</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 49 89 F4 BE ? ? ? ? 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC ? E8 ? ? ? ? 4C 89 E7</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x70\x2A\x48\x89\x78\x2A\x41\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF2</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 70 ? 48 89 78 ? 41 56 48 81 EC ? ? ? ? 48 8B F2</pre></td></tr>
</table>

### CCSPlayer_MovementServices::OnJumpLegacy

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x4C\x8B\x67\x2A\x49\x8B\x7C\x24</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 83 EC ? 4C 8B 67 ? 49 8B 7C 24</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x59</pre></td><td><pre>40 55 53 56 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8B 59</pre></td></tr>
</table>

### CCSPlayer_MovementServices::OnJumpModern

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\x77\x2A\x4D\x8B\x66</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 81 EC ? ? ? ? 4C 8B 77 ? 4D 8B 66</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x57\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\x71</pre></td><td><pre>40 55 56 57 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B 71</pre></td></tr>
</table>

### CCSPlayer_MovementServices::PlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x07</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 0F 84 ? ? ? ? 48 8B 07</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x83\x79\x2A\x2A\x48\x8B\xFA\x48\x8B\xD9\x75\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x4B\x2A\x48\x89\xB4\x24</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 83 79 ? ? 48 8B FA 48 8B D9 75 ? E8 ? ? ? ? 48 8B 4B ? 48 89 B4 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x57</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 57</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x57\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x83\x79</pre></td><td><pre>40 57 41 57 48 81 EC ? ? ? ? 48 83 79</pre></td></tr>
</table>

### CCSPlayer_MovementServices::SetupMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x43</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 D4 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 48 8B 43</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x56\x48\x83\xEC\x2A\x48\x89\x6C\x24\x2A\x49\x8B\xF0</pre></td><td><pre>40 53 56 48 83 EC ? 48 89 6C 24 ? 49 8B F0</pre></td></tr>
</table>

### CCSPlayer_MovementServices::TryPlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 49 89 F6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x4C\x89\x48\x2A\x4C\x89\x40\x2A\x48\x89\x50\x2A\x48\x89\x48\x2A\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70</pre></td><td><pre>48 8B C4 4C 89 48 ? 4C 89 40 ? 48 89 50 ? 48 89 48 ? 55 53 56 57 41 54 41 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70</pre></td></tr>
</table>

### CCSPlayer_MovementServices::WalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xB5\x2A\x2A\x2A\x2A\x41\x55\x41\xBD</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 4C 8D B5 ? ? ? ? 41 55 41 BD</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x70\x2A\x48\x89\x78\x2A\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70\x2A\x48\x8B\xF1</pre></td><td><pre>48 8B C4 48 89 70 ? 48 89 78 ? 55 41 54 41 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70 ? 48 8B F1</pre></td></tr>
</table>

### CCSPlayer_MovementServices::WaterMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x2A\x2A\x2A\x2A\x41\x54\x49\x89\xFC\x4C\x89\xEF\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x0F\x29\x85\x2A\x2A\x2A\x2A\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC7\x45\x2A\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8D\x8D</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD ? ? ? ? 41 54 49 89 FC 4C 89 EF 53 48 89 F3 48 81 EC ? ? ? ? 48 89 85 ? ? ? ? 48 8B 05 ? ? ? ? 0F 29 85 ? ? ? ? 48 C7 85 ? ? ? ? ? ? ? ? 48 C7 45 ? ? ? ? ? 48 89 85 ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 48 89 45 ? E8 ? ? ? ? 48 8D 8D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x70\x2A\x48\x89\x78\x2A\x4C\x89\x60\x2A\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70\x2A\x48\x8B\xF9\x0F\x29\x78\x2A\x48\x8D\x4D\x2A\x44\x0F\x29\x40</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 70 ? 48 89 78 ? 4C 89 60 ? 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70 ? 48 8B F9 0F 29 78 ? 48 8D 4D ? 44 0F 29 40</pre></td></tr>
</table>

### CCSPlayer_WeaponServices::DropWeapon

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x74\x24\x20\x57\x41\x54\x41\x57\x48\x83\xEC\x40\x45</pre></td><td><pre>48 89 74 24 20 57 41 54 41 57 48 83 EC 40 45</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5\x41\x54\x49\x89\xFC\x48\x89\xF7</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 89 D5 41 54 49 89 FC 48 89 F7</pre></td></tr>
</table>

### CDecoyProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x45\x89\xCF\x41\x56\x49\x89\xFE\x41\x55\x49\x89\xD5\x48\x89\xF2\x48\x89\xFE\x41\x54\x48\x8D\x3D\x2A\x2A\x2A\x2A\x4D\x89\xC4\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x45\x31\xC0</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 45 89 CF 41 56 49 89 FE 41 55 49 89 D5 48 89 F2 48 89 FE 41 54 48 8D 3D ? ? ? ? 4D 89 C4 53 48 83 EC ? E8 ? ? ? ? 45 31 C0</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x58\x2A\x48\x8B\xD9</pre></td><td><pre>48 8B C4 55 56 48 81 EC ? ? ? ? 48 89 58 ? 48 8B D9</pre></td></tr>
</table>

### CEntityIOOutput::FireOutputInternal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8D\x05</pre></td><td><pre>55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 49 89 D4 53 48 89 F3 48 83 EC ? 48 8D 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x4C\x89\x4C\x24\x2A\x48\x89\x4C\x24\x2A\x53\x56</pre></td><td><pre>4C 89 4C 24 ? 48 89 4C 24 ? 53 56</pre></td></tr>
</table>

### CEntityIdentity::AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x02</pre></td><td><pre>48 89 5C 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8B 02</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD\x2A\x2A\x2A\x2A\x4D\x89\xCE</pre></td><td><pre>55 48 89 E5 41 57 41 56 4C 8D BD ? ? ? ? 4D 89 CE</pre></td></tr>
</table>

### CEntityInstance::AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x49\x89\xFE\x41\x55\x48\x8D\x7D</pre></td><td><pre>55 48 89 E5 41 56 49 89 FE 41 55 48 8D 7D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x49\x8B\xF0\x48\x8B\xD9\x48\x8B\x0D</pre></td><td><pre>48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 49 8B F0 48 8B D9 48 8B 0D</pre></td></tr>
</table>

### CEntitySystem::AddEntityIOEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xFC\x53\xBB</pre></td><td><pre>55 48 89 E5 41 55 49 89 CD 41 54 49 89 FC 53 BB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x18\x4C\x89\x4C\x24\x20\x48\x89\x4C\x24\x08\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x20</pre></td><td><pre>48 89 5C 24 18 4C 89 4C 24 20 48 89 4C 24 08 55 56 57 41 54 41 55 41 56 41 57 48 83 EC 20</pre></td></tr>
</table>

### CFlashbangProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x45\x89\xCF\x41\x56\x49\x89\xFE\x41\x55\x49\x89\xD5\x48\x89\xF2\x48\x89\xFE\x41\x54\x48\x8D\x3D\x2A\x2A\x2A\x2A\x4D\x89\xC4\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x4C\x89\xEE</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 45 89 CF 41 56 49 89 FE 41 55 49 89 D5 48 89 F2 48 89 FE 41 54 48 8D 3D ? ? ? ? 4D 89 C4 53 48 83 EC ? E8 ? ? ? ? 4C 89 EE</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\x6C\x24\x2A\x49\x8B\xF8\x4C\x8B\xC2\x48\x8B\xD9</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B 6C 24 ? 49 8B F8 4C 8B C2 48 8B D9</pre></td></tr>
</table>

### CGameRules::TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x89\xF7\x41\x56\x48\x8D\x35</pre></td><td><pre>55 48 89 E5 41 57 41 89 F7 41 56 48 8D 35</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x41\x54</pre></td><td><pre>48 8B C4 4C 89 48 ? 48 89 48 ? 55 41 54</pre></td></tr>
</table>

### CHEGrenadeProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x49\x89\xD6</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 49 89 FF 41 56 49 89 D6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\x6C\x24\x2A\x49\x8B\xF8\x4C\x8B\xC2\x0F\x29\x74\x24</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B 6C 24 ? 49 8B F8 4C 8B C2 0F 29 74 24</pre></td></tr>
</table>

### CMolotovProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8D\x35</pre></td><td><pre>55 48 8D 05 ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC ? ? ? ? 4C 8D 35</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x4C\x89\x40\x2A\x48\x89\x48\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24</pre></td><td><pre>48 8B C4 48 89 58 ? 4C 89 40 ? 48 89 48 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 6C 24</pre></td></tr>
</table>

### CSmokeGrenadeProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x68\x2A\x48\x89\x70\x2A\x57\x41\x56\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xB4\x24\x2A\x2A\x2A\x2A\x4D\x8B\xF8</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 68 ? 48 89 70 ? 57 41 56 41 57 48 81 EC ? ? ? ? 48 8B B4 24 ? ? ? ? 4D 8B F8</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x45\x89\xCE</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 49 89 FF 41 56 45 89 CE</pre></td></tr>
</table>

### CSource2Server::g_GameEventManager

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x83\xEC\x08\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x83\x38\x00</pre></td><td><pre>55 48 89 E5 41 55 41 54 53 48 83 EC 08 48 8D 05 ? ? ? ? 48 83 38 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x2A\x48\x83\x3D\x2A\x2A\x2A\x2A\x2A\x74\x2A\x33\xC9\xE8\x2A\x2A\x2A\x2A\xFF\x15\x2A\x2A\x2A\x2A</pre></td><td><pre>48 83 EC ? 48 83 3D ? ? ? ? ? 74 ? 33 C9 E8 ? ? ? ? FF 15 ? ? ? ?</pre></td></tr>
</table>

### CTakeDamageInfo::Constructor

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x48\x83\xEC\x2A\x45\x33\xF6\x48\xC7\x41</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 56 48 83 EC ? 45 33 F6 48 C7 41</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x49\xBB\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x48\x89\xE5</pre></td><td><pre>49 BB ? ? ? ? ? ? ? ? 55 48 89 E5</pre></td></tr>
</table>

### Cmd_ExecuteCommand

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>engine2</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xF6\x41\x55\x41\x89\xD5</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 89 F6 41 55 41 89 D5</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>engine2</td><td><pre>\x48\x89\x5C\x24\x2A\x4C\x89\x4C\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24</pre></td><td><pre>48 89 5C 24 ? 4C 89 4C 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24</pre></td></tr>
</table>

### DispatchDatamapFunction

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x8D\x41</pre></td><td><pre>55 8D 41</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x56\x41\x56\x48\x83\xEC\x2A\x0F\x29\x74\x24</pre></td><td><pre>40 53 56 41 56 48 83 EC ? 0F 29 74 24</pre></td></tr>
</table>

### DispatchParticleEffect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xCD\x41\x54\x53\x48\x89\xD3</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 89 CD 41 54 53 48 89 D3</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x4C\x89\x74\x24\x2A\x55\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xD9\x41\x0F\xB6\xF9</pre></td><td><pre>48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 4C 89 74 24 ? 55 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8B D9 41 0F B6 F9</pre></td></tr>
</table>

### GetWeaponCSDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\x3E\x2A\x75\x2A\x31\xC0\x48\x81\xC4\x2A\x2A\x2A\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x4C\x8D\xA5\x2A\x2A\x2A\x2A\x89\xFB</pre></td><td><pre>48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 81 EC ? ? ? ? 80 3E ? 75 ? 31 C0 48 81 C4 ? ? ? ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 80 ? ? ? ? 4C 8D A5 ? ? ? ? 89 FB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x33\xFF\x4C\x8B\xCA\x8B\xD9</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 33 FF 4C 8B CA 8B D9</pre></td></tr>
</table>

### IGameSystem::InitAllSystems->pFirst

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x4C\x8B\x35\x2A\x2A\x2A\x2A\x4D\x85\xF6\x75\x2A\xE9</pre></td><td><pre>4C 8B 35 ? ? ? ? 4D 85 F6 75 ? E9</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\x1D\x2A\x2A\x2A\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\xBD</pre></td><td><pre>48 8B 1D ? ? ? ? 48 85 DB 0F 84 ? ? ? ? BD</pre></td></tr>
</table>

### INetworkMessageProcessingPreFilter::FilterMessage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>engine2</td><td><pre>\x55\x48\x89\xE5\x41\x54\x53\x2A\x2A\x2A\x48\x89\xFB\x48\x89\xF7\xFF\x50\x2A\x48\x8D\x15\x2A\x2A\x2A\x2A\x31\xC9\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x48\x3B\x42</pre></td><td><pre>55 48 89 E5 41 54 53 ? ? ? 48 89 FB 48 89 F7 FF 50 ? 48 8D 15 ? ? ? ? 31 C9 ? ? ? 48 85 D2 74 ? 48 3B 42</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>engine2</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x48\x8B\x02\x48\x8B\xD9\x48\x8B\xCA</pre></td><td><pre>40 53 48 83 EC ? 48 8B 02 48 8B D9 48 8B CA</pre></td></tr>
</table>

### LegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x83\xFF\x2A\x77\x2A\x48\x63\xFF\x48\xC1\xE7\x2A\x48\x8D\x44\x38</pre></td><td><pre>48 8B 05 ? ? ? ? 48 85 C0 74 ? 83 FF ? 77 ? 48 63 FF 48 C1 E7 ? 48 8D 44 38</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x85\xC9</pre></td><td><pre>48 8B 15 ? ? ? ? 48 85 D2 74 ? 85 C9</pre></td></tr>
</table>

### SetSchemaHammerUniqueId

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x75\x2A\x48\x8B\x03\x48\x89\xDF\xFF\x90\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8D\x05</pre></td><td><pre>75 ? 48 8B 03 48 89 DF FF 90 ? ? ? ? 84 C0 74 ? 48 8D 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x75\x2A\x48\x8B\x03\x48\x8B\xCB\xFF\x90\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8D\x05</pre></td><td><pre>75 ? 48 8B 03 48 8B CB FF 90 ? ? ? ? 84 C0 74 ? 48 8D 05</pre></td></tr>
</table>

### TracePlayerBBox

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4D\x89\xCA\x48\x89\xE5\x41\x57\x49\x89\xCF</pre></td><td><pre>55 4D 89 CA 48 89 E5 41 57 49 89 CF</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x4C\x89\x40\x2A\x55\x53\x57</pre></td><td><pre>48 8B C4 4C 89 40 ? 55 53 57</pre></td></tr>
</table>

### TraceShape

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x49\x89\xCF\x41\x56\x49\x89\xF6\x41\x55\x4D\x89\xC5\x41\x54\x49\x89\xD4</pre></td><td><pre>55 48 89 E5 41 57 49 89 CF 41 56 49 89 F6 41 55 4D 89 C5 41 54 49 89 D4</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\xB8</pre></td><td><pre>48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 56 41 57 48 8D AC 24 ? ? ? ? B8</pre></td></tr>
</table>

### UTIL::CreateEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x8D\x05\x2A\x2A\x2A\x2A\x55\x48\x89\xFA</pre></td><td><pre>48 8D 05 ? ? ? ? 55 48 89 FA</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x48\xC6\x44\x24\x30\x00</pre></td><td><pre>48 83 EC 48 C6 44 24 30 00</pre></td></tr>
</table>

### UTIL::Remove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x89\xFE\x48\x85\xFF\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48</pre></td><td><pre>48 89 FE 48 85 FF 74 ? 48 8D 05 ? ? ? ? 48</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x85\xC9\x74\x2A\x48\x8B\xD1\x48\x8B\x0D\x2A\x2A\x2A\x2A</pre></td><td><pre>48 85 C9 74 ? 48 8B D1 48 8B 0D ? ? ? ?</pre></td></tr>
</table>

## beta

* Gamedata: https://github.com/swiftly-solution/swiftlys2/blob/beta/plugin_files/gamedata/cs2/core/signatures.jsonc

### BotNavIgnore1

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x2A\x74</pre></td><td><pre>0F 84 ? ? ? ? 80 B8 ? ? ? ? ? 0F 84 ? ? ? ? 80 3D ? ? ? ? ? 74</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB8\x2A\x2A\x2A\x2A\x45\x84\xFF\x0F\x84</pre></td><td><pre>0F 84 ? ? ? ? 44 0F B6 B8 ? ? ? ? 45 84 FF 0F 84</pre></td></tr>
</table>

### BotNavIgnore2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB8\x2A\x2A\x2A\x2A\x45\x84\xFF\x0F\x84</pre></td><td><pre>0F 84 ? ? ? ? 44 0F B6 B8 ? ? ? ? 45 84 FF 0F 84</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x2A\x74</pre></td><td><pre>0F 84 ? ? ? ? 80 B8 ? ? ? ? ? 0F 84 ? ? ? ? 80 3D ? ? ? ? ? 74</pre></td></tr>
</table>

### BotNavIgnore3

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\xB8\x2A\x2A\x2A\x2A\x45\x84\xFF\x0F\x84</pre></td><td><pre>0F 84 ? ? ? ? 44 0F B6 B8 ? ? ? ? 45 84 FF 0F 84</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x80\xB8\x2A\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\x3D\x2A\x2A\x2A\x2A\x2A\x74</pre></td><td><pre>0F 84 ? ? ? ? 80 B8 ? ? ? ? ? 0F 84 ? ? ? ? 80 3D ? ? ? ? ? 74</pre></td></tr>
</table>

### CAttributeList::SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x2A\xF3\x0F\x11\x85</pre></td><td><pre>55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 89 F3 48 83 EC ? F3 0F 11 85</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x55\x41\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x74\x24</pre></td><td><pre>40 53 55 41 56 48 81 EC ? ? ? ? 0F 29 74 24</pre></td></tr>
</table>

### CBaseEntity::DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC</pre></td><td><pre>48 85 FF 74 ? 55 48 89 E5 41 55 41 54 49 89 FC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x30\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9</pre></td><td><pre>48 89 5C 24 10 57 48 83 EC 30 48 8B DA 48 8B F9 48 85 C9</pre></td></tr>
</table>

### CBaseEntity::TakeDamage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x31\xFF</pre></td><td><pre>55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 49 89 FD 31 FF</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x54\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4D\x8B\xE0</pre></td><td><pre>40 55 53 56 57 41 54 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4D 8B E0</pre></td></tr>
</table>

### CBaseModelEntity::SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x38\x48\x8B\x07\xFF\x50\x2A\x48\x89\xDF\x48\x8B\x5D\x2A\xC9\x48\x89\xC6\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\x55</pre></td><td><pre>55 48 89 E5 53 48 89 FB 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B 38 48 8B 07 FF 50 ? 48 89 DF 48 8B 5D ? C9 48 89 C6 E9 ? ? ? ? CC CC CC CC 55</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8D\x54\x24\x2A\x48\x8B\x01\xFF\x50\x2A\x48\x8B\x54\x24\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x2A\x5B\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x89\x5C\x24</pre></td><td><pre>40 53 48 83 EC ? 48 8B D9 4C 8B C2 48 8B 0D ? ? ? ? 48 8D 54 24 ? 48 8B 01 FF 50 ? 48 8B 54 24 ? 48 8B CB E8 ? ? ? ? 48 83 C4 ? 5B C3 CC CC CC CC CC CC CC CC CC CC CC CC CC CC CC 48 89 5C 24</pre></td></tr>
</table>

### CBasePlayerController::OnSimulateUserCommands

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8D\x35\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\x8D\x85\x2A\x2A\x2A\x2A\x48\x89\xC2\x48\x89\x85\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\xBB</pre></td><td><pre>55 48 8D 05 ? ? ? ? 48 8D 35 ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 81 EC ? ? ? ? 48 89 85 ? ? ? ? 48 8D 05 ? ? ? ? C7 85 ? ? ? ? ? ? ? ? 48 89 85 ? ? ? ? 48 8D 85 ? ? ? ? 48 89 C2 48 89 85 ? ? ? ? E8 ? ? ? ? 48 8B BB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x54\x41\x56\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC</pre></td><td><pre>40 55 53 56 57 41 54 41 56 48 8D AC 24 ? ? ? ? 48 81 EC</pre></td></tr>
</table>

### CBasePlayerController::SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x87\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xCE\x41\x55\x45\x89\xCD</pre></td><td><pre>55 48 8D 87 ? ? ? ? 48 89 E5 41 57 41 56 41 89 CE 41 55 45 89 CD</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x44\x88\x4C\x24\x2A\x53\x57\x41\x54\x41\x56\x41\x57\x48\x83\xEC</pre></td><td><pre>44 88 4C 24 ? 53 57 41 54 41 56 41 57 48 83 EC</pre></td></tr>
</table>

### CCSPlayerController::ProcessUserCmd

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x89\x4D</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 89 4D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x44\x88\x48\x20\x44\x89\x40\x18\x48\x89\x50\x10\x53</pre></td><td><pre>48 8B C4 44 88 48 20 44 89 40 18 48 89 50 10 53</pre></td></tr>
</table>

### CCSPlayerController::SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x89\xF7</pre></td><td><pre>55 48 89 E5 41 54 49 89 FC 89 F7</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xD9\x8B\xFA</pre></td><td><pre>40 53 57 48 81 EC ? ? ? ? 48 8B D9 8B FA</pre></td></tr>
</table>

### CCSPlayerPawn::CanMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x57\x48\x83\xEC\x30\x48\x8B\xF9\xBA\xFF\xFF\xFF\xFF</pre></td><td><pre>40 57 48 83 EC 30 48 8B F9 BA FF FF FF FF</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x0F\xB6\x10\x31\xC0</pre></td><td><pre>55 BE ? ? ? ? 48 89 E5 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC ? E8 ? ? ? ? 48 85 C0 74 ? 0F B6 10 31 C0</pre></td></tr>
</table>

### CCSPlayerPawn::PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x80\xBB</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 80 BB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x41\x54\x48\x8B\xEC</pre></td><td><pre>40 55 56 41 54 48 8B EC</pre></td></tr>
</table>

### CCSPlayer_ItemServices::CanAcquire

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 CD 41 54 49 89 FC 53 48 89 F3 48 83 EC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x44\x89\x44\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x53\x56\x57\x41\x55\x41\x56\x41\x57\x48\x8B\xEC</pre></td><td><pre>44 89 44 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 55 41 56 41 57 48 8B EC</pre></td></tr>
</table>

### CCSPlayer_MovementServices::AirAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x49\x89\xD5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 55 49 89 D5 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\xF3\x0F\x11\x5C\x24\x20\x53\x56\x57\x48\x83\xEC\x60</pre></td><td><pre>F3 0F 11 5C 24 20 53 56 57 48 83 EC 60</pre></td></tr>
</table>

### CCSPlayer_MovementServices::AirMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xB5\x2A\x2A\x2A\x2A\x41\x55\x41\x54</pre></td><td><pre>55 48 8D 15 ? ? ? ? 48 89 E5 41 57 41 56 4C 8D B5 ? ? ? ? 41 55 41 54</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x53\x55\x56\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70</pre></td><td><pre>48 8B C4 53 55 56 57 48 81 EC ? ? ? ? 0F 29 70</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CanUnduck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 81 EC ? ? ? ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x41\x55\x48\x8D\xAC\x24</pre></td><td><pre>40 55 56 41 55 48 8D AC 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CategorizePosition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 41 89 D5</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x57\x41\x54\x41\x55\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9</pre></td><td><pre>40 55 56 57 41 54 41 55 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 48 8B F9</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckFalling

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x07\xFF\x90\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\xF3\x0F\x10\x8B</pre></td><td><pre>55 48 89 E5 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 0F 84 ? ? ? ? 48 8B 07 FF 90 ? ? ? ? 48 85 C0 0F 84 ? ? ? ? F3 0F 10 8B</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x83\x79</pre></td><td><pre>40 55 57 48 81 EC ? ? ? ? 48 83 79</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckJumpButtonLegacy

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\xBE\x02\x00\x00\x00\x53\x48\x89\xFB\x48\x83\xEC\x68</pre></td><td><pre>55 48 89 E5 41 55 41 54 49 89 F4 BE 02 00 00 00 53 48 89 FB 48 83 EC 68</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xEA</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 57 48 83 EC ? 48 8B EA</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckJumpButtonModern

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\x75\x90\x41\x55\x41\x54\x49\x89\xF4</pre></td><td><pre>55 48 89 E5 41 57 41 56 4C 8D 75 90 41 55 41 54 49 89 F4</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x8B\x9A</pre></td><td><pre>40 55 53 56 57 41 54 41 55 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 8B 9A</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckParameters

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\x68\xA1</pre></td><td><pre>48 8B C4 55 53 56 57 41 56 41 57 48 8D 68 A1</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x49\x8B\x44\x24</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 81 EC ? ? ? ? E8 ? ? ? ? 49 8B 44 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x49\x89\xF4\x53\x48\x83\xEC\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 49 89 F4 53 48 83 EC ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x4C\x89\x40\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x68</pre></td><td><pre>48 8B C4 48 89 58 ? 4C 89 40 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 68</pre></td></tr>
</table>

### CCSPlayer_MovementServices::CheckWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x70\x01\x00\x00</pre></td><td><pre>55 48 89 E5 41 54 49 89 F4 53 48 89 FB 48 81 EC 70 01 00 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x55\x48\x8D\x6C\x24</pre></td><td><pre>48 8B C4 48 89 58 ? 55 48 8D 6C 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::Duck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xF3\x0F\x10\x05</pre></td><td><pre>55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 89 F3 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 10 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\xB9</pre></td><td><pre>48 8B C4 55 53 56 57 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 80 B9</pre></td></tr>
</table>

### CCSPlayer_MovementServices::Friction

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\x47</pre></td><td><pre>55 48 89 E5 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 8B 47</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x83\x79\x2A\x2A\x48\x8B\xFA\x0F\x29\x7C\x24</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 83 79 ? ? 48 8B FA 0F 29 7C 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::FullWalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x84\xD2</pre></td><td><pre>55 48 89 E5 41 54 49 89 F4 53 48 89 FB 84 D2</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xFA\x48\x8B\xD9\x45\x84\xC0\x75</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 8B FA 48 8B D9 45 84 C0 75</pre></td></tr>
</table>

### CCSPlayer_MovementServices::GroundAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x0F\x28\xF1\x48\x89\xE5</pre></td><td><pre>55 0F 28 F1 48 89 E5</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x41\x54\x41\x55\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\xF2\x41\x0F\x10\x01</pre></td><td><pre>40 53 41 54 41 55 41 57 48 81 EC ? ? ? ? F2 41 0F 10 01</pre></td></tr>
</table>

### CCSPlayer_MovementServices::LadderMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x2A\x2A\x2A\x2A\x41\x54\x49\x89\xF4</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD ? ? ? ? 41 54 49 89 F4</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9</pre></td><td><pre>40 55 53 56 57 41 57 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 48 8B F9</pre></td></tr>
</table>

### CCSPlayer_MovementServices::MoveInit

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\xBE\x2A\x2A\x2A\x2A\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x4C\x89\xE7</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 49 89 F4 BE ? ? ? ? 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC ? E8 ? ? ? ? 4C 89 E7</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x70\x2A\x48\x89\x78\x2A\x41\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF2</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 70 ? 48 89 78 ? 41 56 48 81 EC ? ? ? ? 48 8B F2</pre></td></tr>
</table>

### CCSPlayer_MovementServices::OnJumpLegacy

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x59</pre></td><td><pre>40 55 53 56 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8B 59</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x4C\x8B\x67\x2A\x49\x8B\x7C\x24</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 83 EC ? 4C 8B 67 ? 49 8B 7C 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::OnJumpModern

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\x77\x2A\x4D\x8B\x66</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 81 EC ? ? ? ? 4C 8B 77 ? 4D 8B 66</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x57\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\x71</pre></td><td><pre>40 55 56 57 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B 71</pre></td></tr>
</table>

### CCSPlayer_MovementServices::PlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x07</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 0F 84 ? ? ? ? 48 8B 07</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x83\x79\x2A\x2A\x48\x8B\xFA\x48\x8B\xD9\x75\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x4B\x2A\x48\x89\xB4\x24</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 83 79 ? ? 48 8B FA 48 8B D9 75 ? E8 ? ? ? ? 48 8B 4B ? 48 89 B4 24</pre></td></tr>
</table>

### CCSPlayer_MovementServices::ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x57</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 57</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x57\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x83\x79</pre></td><td><pre>40 57 41 57 48 81 EC ? ? ? ? 48 83 79</pre></td></tr>
</table>

### CCSPlayer_MovementServices::SetupMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x43</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 D4 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 48 8B 43</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x56\x48\x83\xEC\x2A\x48\x89\x6C\x24\x2A\x49\x8B\xF0</pre></td><td><pre>40 53 56 48 83 EC ? 48 89 6C 24 ? 49 8B F0</pre></td></tr>
</table>

### CCSPlayer_MovementServices::TryPlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 49 89 F6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x4C\x89\x48\x2A\x4C\x89\x40\x2A\x48\x89\x50\x2A\x48\x89\x48\x2A\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70</pre></td><td><pre>48 8B C4 4C 89 48 ? 4C 89 40 ? 48 89 50 ? 48 89 48 ? 55 53 56 57 41 54 41 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70</pre></td></tr>
</table>

### CCSPlayer_MovementServices::WalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xB5\x2A\x2A\x2A\x2A\x41\x55\x41\xBD</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 4C 8D B5 ? ? ? ? 41 55 41 BD</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x70\x2A\x48\x89\x78\x2A\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70\x2A\x48\x8B\xF1</pre></td><td><pre>48 8B C4 48 89 70 ? 48 89 78 ? 55 41 54 41 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70 ? 48 8B F1</pre></td></tr>
</table>

### CCSPlayer_MovementServices::WaterMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x2A\x2A\x2A\x2A\x41\x54\x49\x89\xFC\x4C\x89\xEF\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x0F\x29\x85\x2A\x2A\x2A\x2A\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC7\x45\x2A\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8D\x8D</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD ? ? ? ? 41 54 49 89 FC 4C 89 EF 53 48 89 F3 48 81 EC ? ? ? ? 48 89 85 ? ? ? ? 48 8B 05 ? ? ? ? 0F 29 85 ? ? ? ? 48 C7 85 ? ? ? ? ? ? ? ? 48 C7 45 ? ? ? ? ? 48 89 85 ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 48 89 45 ? E8 ? ? ? ? 48 8D 8D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x70\x2A\x48\x89\x78\x2A\x4C\x89\x60\x2A\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70\x2A\x48\x8B\xF9\x0F\x29\x78\x2A\x48\x8D\x4D\x2A\x44\x0F\x29\x40</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 70 ? 48 89 78 ? 4C 89 60 ? 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70 ? 48 8B F9 0F 29 78 ? 48 8D 4D ? 44 0F 29 40</pre></td></tr>
</table>

### CCSPlayer_WeaponServices::DropWeapon

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5\x41\x54\x49\x89\xFC\x48\x89\xF7</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 89 D5 41 54 49 89 FC 48 89 F7</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x74\x24\x20\x57\x41\x54\x41\x57\x48\x83\xEC\x40\x45</pre></td><td><pre>48 89 74 24 20 57 41 54 41 57 48 83 EC 40 45</pre></td></tr>
</table>

### CDecoyProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x45\x89\xCF\x41\x56\x49\x89\xFE\x41\x55\x49\x89\xD5\x48\x89\xF2\x48\x89\xFE\x41\x54\x48\x8D\x3D\x2A\x2A\x2A\x2A\x4D\x89\xC4\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x45\x31\xC0</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 45 89 CF 41 56 49 89 FE 41 55 49 89 D5 48 89 F2 48 89 FE 41 54 48 8D 3D ? ? ? ? 4D 89 C4 53 48 83 EC ? E8 ? ? ? ? 45 31 C0</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x58\x2A\x48\x8B\xD9</pre></td><td><pre>48 8B C4 55 56 48 81 EC ? ? ? ? 48 89 58 ? 48 8B D9</pre></td></tr>
</table>

### CEntityIOOutput::FireOutputInternal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8D\x05</pre></td><td><pre>55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 49 89 D4 53 48 89 F3 48 83 EC ? 48 8D 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x4C\x89\x4C\x24\x2A\x48\x89\x4C\x24\x2A\x53\x56</pre></td><td><pre>4C 89 4C 24 ? 48 89 4C 24 ? 53 56</pre></td></tr>
</table>

### CEntityIdentity::AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD\x2A\x2A\x2A\x2A\x4D\x89\xCE</pre></td><td><pre>55 48 89 E5 41 57 41 56 4C 8D BD ? ? ? ? 4D 89 CE</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x02</pre></td><td><pre>48 89 5C 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8B 02</pre></td></tr>
</table>

### CEntityInstance::AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x49\x89\xFE\x41\x55\x48\x8D\x7D</pre></td><td><pre>55 48 89 E5 41 56 49 89 FE 41 55 48 8D 7D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x49\x8B\xF0\x48\x8B\xD9\x48\x8B\x0D</pre></td><td><pre>48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 49 8B F0 48 8B D9 48 8B 0D</pre></td></tr>
</table>

### CEntitySystem::AddEntityIOEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x49\x89\xCD\x41\x54\x49\x89\xFC\x53\xBB</pre></td><td><pre>55 48 89 E5 41 55 49 89 CD 41 54 49 89 FC 53 BB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x18\x4C\x89\x4C\x24\x20\x48\x89\x4C\x24\x08\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x20</pre></td><td><pre>48 89 5C 24 18 4C 89 4C 24 20 48 89 4C 24 08 55 56 57 41 54 41 55 41 56 41 57 48 83 EC 20</pre></td></tr>
</table>

### CFlashbangProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x45\x89\xCF\x41\x56\x49\x89\xFE\x41\x55\x49\x89\xD5\x48\x89\xF2\x48\x89\xFE\x41\x54\x48\x8D\x3D\x2A\x2A\x2A\x2A\x4D\x89\xC4\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x4C\x89\xEE</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 45 89 CF 41 56 49 89 FE 41 55 49 89 D5 48 89 F2 48 89 FE 41 54 48 8D 3D ? ? ? ? 4D 89 C4 53 48 83 EC ? E8 ? ? ? ? 4C 89 EE</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\x6C\x24\x2A\x49\x8B\xF8\x4C\x8B\xC2\x48\x8B\xD9</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B 6C 24 ? 49 8B F8 4C 8B C2 48 8B D9</pre></td></tr>
</table>

### CGameRules::TerminateRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x89\xF7\x41\x56\x48\x8D\x35</pre></td><td><pre>55 48 89 E5 41 57 41 89 F7 41 56 48 8D 35</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x4C\x89\x48\x2A\x48\x89\x48\x2A\x55\x41\x54</pre></td><td><pre>48 8B C4 4C 89 48 ? 48 89 48 ? 55 41 54</pre></td></tr>
</table>

### CHEGrenadeProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x49\x89\xD6</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 49 89 FF 41 56 49 89 D6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\x6C\x24\x2A\x49\x8B\xF8\x4C\x8B\xC2\x0F\x29\x74\x24</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B 6C 24 ? 49 8B F8 4C 8B C2 0F 29 74 24</pre></td></tr>
</table>

### CMolotovProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x4C\x89\x40\x2A\x48\x89\x48\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24</pre></td><td><pre>48 8B C4 48 89 58 ? 4C 89 40 ? 48 89 48 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 6C 24</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8D\x35</pre></td><td><pre>55 48 8D 05 ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC ? ? ? ? 4C 8D 35</pre></td></tr>
</table>

### CSmokeGrenadeProjectile::EmitGrenade

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4C\x89\xC1\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x45\x89\xCE</pre></td><td><pre>55 4C 89 C1 48 89 E5 41 57 49 89 FF 41 56 45 89 CE</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x68\x2A\x48\x89\x70\x2A\x57\x41\x56\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xB4\x24\x2A\x2A\x2A\x2A\x4D\x8B\xF8</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 68 ? 48 89 70 ? 57 41 56 41 57 48 81 EC ? ? ? ? 48 8B B4 24 ? ? ? ? 4D 8B F8</pre></td></tr>
</table>

### CSource2Server::g_GameEventManager

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x83\xEC\x08\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x83\x38\x00</pre></td><td><pre>55 48 89 E5 41 55 41 54 53 48 83 EC 08 48 8D 05 ? ? ? ? 48 83 38 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x2A\x48\x83\x3D\x2A\x2A\x2A\x2A\x2A\x74\x2A\x33\xC9\xE8\x2A\x2A\x2A\x2A\xFF\x15\x2A\x2A\x2A\x2A</pre></td><td><pre>48 83 EC ? 48 83 3D ? ? ? ? ? 74 ? 33 C9 E8 ? ? ? ? FF 15 ? ? ? ?</pre></td></tr>
</table>

### CTakeDamageInfo::Constructor

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x48\x83\xEC\x2A\x45\x33\xF6\x48\xC7\x41</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 56 48 83 EC ? 45 33 F6 48 C7 41</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x49\xBB\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x48\x89\xE5</pre></td><td><pre>49 BB ? ? ? ? ? ? ? ? 55 48 89 E5</pre></td></tr>
</table>

### Cmd_ExecuteCommand

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>engine2</td><td><pre>\x48\x89\x5C\x24\x2A\x4C\x89\x4C\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24</pre></td><td><pre>48 89 5C 24 ? 4C 89 4C 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>engine2</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xF6\x41\x55\x41\x89\xD5</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 89 F6 41 55 41 89 D5</pre></td></tr>
</table>

### DispatchDatamapFunction

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x56\x41\x56\x48\x83\xEC\x2A\x0F\x29\x74\x24</pre></td><td><pre>40 53 56 41 56 48 83 EC ? 0F 29 74 24</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x8D\x41</pre></td><td><pre>55 8D 41</pre></td></tr>
</table>

### DispatchParticleEffect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xCD\x41\x54\x53\x48\x89\xD3</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 89 CD 41 54 53 48 89 D3</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x4C\x89\x74\x24\x2A\x55\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xD9\x41\x0F\xB6\xF9</pre></td><td><pre>48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 4C 89 74 24 ? 55 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8B D9 41 0F B6 F9</pre></td></tr>
</table>

### GetWeaponCSDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\x3E\x2A\x75\x2A\x31\xC0\x48\x81\xC4\x2A\x2A\x2A\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x4C\x8D\xA5\x2A\x2A\x2A\x2A\x89\xFB</pre></td><td><pre>48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 81 EC ? ? ? ? 80 3E ? 75 ? 31 C0 48 81 C4 ? ? ? ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 80 ? ? ? ? 4C 8D A5 ? ? ? ? 89 FB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x33\xFF\x4C\x8B\xCA\x8B\xD9</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 33 FF 4C 8B CA 8B D9</pre></td></tr>
</table>

### IGameSystem::InitAllSystems->pFirst

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x4C\x8B\x35\x2A\x2A\x2A\x2A\x4D\x85\xF6\x75\x2A\xE9</pre></td><td><pre>4C 8B 35 ? ? ? ? 4D 85 F6 75 ? E9</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\x1D\x2A\x2A\x2A\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\xBD</pre></td><td><pre>48 8B 1D ? ? ? ? 48 85 DB 0F 84 ? ? ? ? BD</pre></td></tr>
</table>

### INetworkMessageProcessingPreFilter::FilterMessage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>engine2</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x48\x8B\x02\x48\x8B\xD9\x48\x8B\xCA</pre></td><td><pre>40 53 48 83 EC ? 48 8B 02 48 8B D9 48 8B CA</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>engine2</td><td><pre>\x55\x48\x89\xE5\x41\x54\x53\x2A\x2A\x2A\x48\x89\xFB\x48\x89\xF7\xFF\x50\x2A\x48\x8D\x15\x2A\x2A\x2A\x2A\x31\xC9\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x48\x3B\x42</pre></td><td><pre>55 48 89 E5 41 54 53 ? ? ? 48 89 FB 48 89 F7 FF 50 ? 48 8D 15 ? ? ? ? 31 C9 ? ? ? 48 85 D2 74 ? 48 3B 42</pre></td></tr>
</table>

### LegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x83\xFF\x2A\x77\x2A\x48\x63\xFF\x48\xC1\xE7\x2A\x48\x8D\x44\x38</pre></td><td><pre>48 8B 05 ? ? ? ? 48 85 C0 74 ? 83 FF ? 77 ? 48 63 FF 48 C1 E7 ? 48 8D 44 38</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x85\xC9</pre></td><td><pre>48 8B 15 ? ? ? ? 48 85 D2 74 ? 85 C9</pre></td></tr>
</table>

### SetSchemaHammerUniqueId

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x75\x2A\x48\x8B\x03\x48\x89\xDF\xFF\x90\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8D\x05</pre></td><td><pre>75 ? 48 8B 03 48 89 DF FF 90 ? ? ? ? 84 C0 74 ? 48 8D 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x75\x2A\x48\x8B\x03\x48\x8B\xCB\xFF\x90\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8D\x05</pre></td><td><pre>75 ? 48 8B 03 48 8B CB FF 90 ? ? ? ? 84 C0 74 ? 48 8D 05</pre></td></tr>
</table>

### TracePlayerBBox

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x4D\x89\xCA\x48\x89\xE5\x41\x57\x49\x89\xCF</pre></td><td><pre>55 4D 89 CA 48 89 E5 41 57 49 89 CF</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x4C\x89\x40\x2A\x55\x53\x57</pre></td><td><pre>48 8B C4 4C 89 40 ? 55 53 57</pre></td></tr>
</table>

### TraceShape

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x49\x89\xCF\x41\x56\x49\x89\xF6\x41\x55\x4D\x89\xC5\x41\x54\x49\x89\xD4</pre></td><td><pre>55 48 89 E5 41 57 49 89 CF 41 56 49 89 F6 41 55 4D 89 C5 41 54 49 89 D4</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\xB8</pre></td><td><pre>48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 56 41 57 48 8D AC 24 ? ? ? ? B8</pre></td></tr>
</table>

### UTIL::CreateEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x48\xC6\x44\x24\x30\x00</pre></td><td><pre>48 83 EC 48 C6 44 24 30 00</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x8D\x05\x2A\x2A\x2A\x2A\x55\x48\x89\xFA</pre></td><td><pre>48 8D 05 ? ? ? ? 55 48 89 FA</pre></td></tr>
</table>

### UTIL::Remove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x89\xFE\x48\x85\xFF\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48</pre></td><td><pre>48 89 FE 48 85 FF 74 ? 48 8D 05 ? ? ? ? 48</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x85\xC9\x74\x2A\x48\x8B\xD1\x48\x8B\x0D\x2A\x2A\x2A\x2A</pre></td><td><pre>48 85 C9 74 ? 48 8B D1 48 8B 0D ? ? ? ?</pre></td></tr>
</table>

