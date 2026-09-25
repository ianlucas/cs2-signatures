# cs2kz-metamod

Last updated: September 25, 2026 at 9:54:44 PM GMT

* Manifests: [3558451520161040527](https://steamdb.info/depot/2347771/history/?changeid=M:3558451520161040527), [6313884916170234593](https://steamdb.info/depot/2347770/history/?changeid=M:6313884916170234593), [7484770979211644490](https://steamdb.info/depot/2347773/history/?changeid=M:7484770979211644490)
* Repository: https://github.com/KZGlobalTeam/cs2kz-metamod
* Gamedata: https://github.com/KZGlobalTeam/cs2kz-metamod/blob/master/gamedata/cs2kz-core.games.txt

## Signatures

### SetModel

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>⚠️(2)</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8B\x38\x48\x8B\x07\xFF\x50\x2A\x48\x89\xDF\x48\x8B\x5D\x2A\xC9\x48\x89\xC6\xE9\x2A\x2A\x2A\x2A</pre></td><td><pre>55 48 89 E5 53 48 89 FB 48 83 EC ? 48 8D 05 ? ? ? ? 48 8B 38 48 8B 07 FF 50 ? 48 89 DF 48 8B 5D ? C9 48 89 C6 E9 ? ? ? ?</pre></td></tr>
<tr><td>⚠️(2)</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8D\x54\x24\x2A\x48\x8B\x01\xFF\x50\x2A\x48\x8B\x54\x24\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x2A\x5B\xC3</pre></td><td><pre>40 53 48 83 EC ? 48 8B D9 4C 8B C2 48 8B 0D ? ? ? ? 48 8D 54 24 ? 48 8B 01 FF 50 ? 48 8B 54 24 ? 48 8B CB E8 ? ? ? ? 48 83 C4 ? 5B C3</pre></td></tr>
</table>

### AirAccelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x49\x89\xD5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x18\x48\x8B\x7F\x38</pre></td><td><pre>55 48 89 E5 41 55 49 89 D5 41 54 49 89 FC 53 48 89 F3 48 83 EC 18 48 8B 7F 38</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\xF3\x0F\x11\x5C\x24\x20\x53\x56\x57\x48\x83\xEC\x60</pre></td><td><pre>F3 0F 11 5C 24 20 53 56 57 48 83 EC 60</pre></td></tr>
</table>

### AirMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD</pre></td><td><pre>55 48 8D 15 ? ? ? ? 48 89 E5 41 57 41 56 4C 8D BD</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x48\x8D\x68\x2A\x48\x81\xEC\x10\x01\x00\x00</pre></td><td><pre>48 8B C4 55 53 56 57 41 56 48 8D 68 ? 48 81 EC 10 01 00 00</pre></td></tr>
</table>

### CBasePlayerController_SetPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x87\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xCE\x41\x55\x45\x89\xCD</pre></td><td><pre>55 48 8D 87 ? ? ? ? 48 89 E5 41 57 41 56 41 89 CE 41 55 45 89 CD</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x44\x88\x4C\x24\x2A\x53\x57\x41\x54\x41\x56\x41\x57\x48\x83\xEC</pre></td><td><pre>44 88 4C 24 ? 53 57 41 54 41 56 41 57 48 83 EC</pre></td></tr>
</table>

### CCSPlayerController_SwitchTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x89\xF7</pre></td><td><pre>55 48 89 E5 41 54 49 89 FC 89 F7</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xD9\x8B\xFA</pre></td><td><pre>40 53 57 48 81 EC ? ? ? ? 48 8B D9 8B FA</pre></td></tr>
</table>

### CPhysicsGameSystemFrameBoundary

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x8D\x35\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x56\x41\x55\x48\x8D\x55\x2A\x41\x54\x49\x89\xFC</pre></td><td><pre>55 48 8D 05 ? ? ? ? 48 8D 35 ? ? ? ? 48 89 E5 41 56 41 55 48 8D 55 ? 41 54 49 89 FC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x4C\x8B\xDC\x49\x89\x5B\x2A\x49\x89\x6B\x2A\x49\x89\x73\x2A\x57\x41\x56\x41\x57\x48\x83\xEC\x60\x49\xC7\x43</pre></td><td><pre>4C 8B DC 49 89 5B ? 49 89 6B ? 49 89 73 ? 57 41 56 41 57 48 83 EC 60 49 C7 43</pre></td></tr>
</table>

### CanMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x83\xEC\x08\x48\x8B\x05\x2A\x2A\x2A\x2A\x80\x78\x2A\x2A\x74</pre></td><td><pre>55 48 89 E5 41 55 41 54 53 48 83 EC 08 48 8B 05 ? ? ? ? 80 78 ? ? 74</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x30\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\xF9</pre></td><td><pre>48 89 74 24 ? 57 48 83 EC 30 48 8B 05 ? ? ? ? 48 8B F9</pre></td></tr>
</table>

### CanUnduck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x60\x01\x00\x00</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 81 EC 60 01 00 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x41\x55\x48\x8D\xAC\x24</pre></td><td><pre>40 55 56 41 55 48 8D AC 24</pre></td></tr>
</table>

### CategorizePosition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x89\xD5</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 41 89 D5</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x57\x41\x54\x41\x55\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9</pre></td><td><pre>40 55 56 57 41 54 41 55 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 48 8B F9</pre></td></tr>
</table>

### CheckFalling

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x07\xFF\x90\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\xF3\x0F\x10\x8B</pre></td><td><pre>55 48 89 E5 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 0F 84 ? ? ? ? 48 8B 07 FF 90 ? ? ? ? 48 85 C0 0F 84 ? ? ? ? F3 0F 10 8B</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x55\x48\x81\xEC\x88\x00\x00\x00\x48\x83\x79</pre></td><td><pre>40 53 55 48 81 EC 88 00 00 00 48 83 79</pre></td></tr>
</table>

### CheckJumpButtonLegacy

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xF4\xBE\x02\x00\x00\x00\x53\x48\x89\xFB\x48\x83\xEC\x58</pre></td><td><pre>55 48 89 E5 41 55 41 54 49 89 F4 BE 02 00 00 00 53 48 89 FB 48 83 EC 58</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x48\x83\xEC\x30\x4C\x8B\xF2</pre></td><td><pre>48 89 5C 24 ? 48 89 7C 24 ? 41 56 48 83 EC 30 4C 8B F2</pre></td></tr>
</table>

### CheckJumpButtonModern

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x78\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 53 48 89 F3 48 83 EC 78 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x8B\x9A</pre></td><td><pre>40 55 53 56 57 41 54 41 55 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 8B 9A</pre></td></tr>
</table>

### CheckParameters

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\x68\xA1</pre></td><td><pre>48 8B C4 55 53 56 57 41 56 41 57 48 8D 68 A1</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x81\xEC\x88\x01\x00\x00\xE8</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 81 EC 88 01 00 00 E8</pre></td></tr>
</table>

### CheckVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x68</pre></td><td><pre>55 48 89 E5 41 57 49 89 F7 41 56 41 55 41 54 53 48 89 FB 48 83 EC 68</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x4C\x89\x40\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x68</pre></td><td><pre>48 8B C4 48 89 58 ? 4C 89 40 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 68</pre></td></tr>
</table>

### CheckWater

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x70\x01\x00\x00</pre></td><td><pre>55 48 89 E5 41 54 49 89 F4 53 48 89 FB 48 81 EC 70 01 00 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x55\x48\x8D\x6C\x24</pre></td><td><pre>48 8B C4 48 89 58 ? 55 48 8D 6C 24</pre></td></tr>
</table>

### CreateBot

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x41\x89\xD4\x53\x48\x81\xEC\xC8\x00\x00\x00</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 41 89 D4 53 48 81 EC C8 00 00 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x57\x48\x81\xEC\xC0\x00\x00\x00\x41\x0F\xB6\xD8</pre></td><td><pre>48 89 5C 24 10 48 89 6C 24 18 57 48 81 EC C0 00 00 00 41 0F B6 D8</pre></td></tr>
</table>

### CreateEntityByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x48\xC6\x44\x24\x30\x00</pre></td><td><pre>48 83 EC 48 C6 44 24 30 00</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x8D\x05\x2A\x2A\x2A\x2A\x55\x48\x89\xFA</pre></td><td><pre>48 8D 05 ? ? ? ? 55 48 89 FA</pre></td></tr>
</table>

### DebugDrawMesh

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xF0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x38\x01\x00\x00</pre></td><td><pre>55 48 89 F0 48 89 E5 41 57 41 56 41 55 41 54 53 48 81 EC 38 01 00 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x44\x89\x48\x2A\x44\x89\x40\x2A\x48\x89\x48\x2A\x55</pre></td><td><pre>48 8B C4 44 89 48 ? 44 89 40 ? 48 89 48 ? 55</pre></td></tr>
</table>

### DecalTrace

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\xF3\x0F\x10\x05\x2A\x2A\x2A\x2A\x0F\x2E\x87\x2A\x2A\x2A\x2A\x7A\x2A\x74\x2A\x48\x8B\x47</pre></td><td><pre>F3 0F 10 05 ? ? ? ? 0F 2E 87 ? ? ? ? 7A ? 74 ? 48 8B 47</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x2A\xF3\x0F\x10\x81\x2A\x2A\x2A\x2A\x0F\x2E\x05</pre></td><td><pre>48 83 EC ? F3 0F 10 81 ? ? ? ? 0F 2E 05</pre></td></tr>
</table>

### DispatchSpawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xFF\x74\x2A\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC</pre></td><td><pre>48 85 FF 74 ? 55 48 89 E5 41 55 41 54 49 89 FC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xF9\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x48\x85\xD2</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 8B DA 48 8B F9 48 85 C9 0F 84 ? ? ? ? 48 85 D2</pre></td></tr>
</table>

### Duck

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xF3\x0F\x10\x05</pre></td><td><pre>55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 89 F3 48 81 EC ? ? ? ? 48 8D 05 ? ? ? ? F3 0F 10 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x55\x53\x56\x41\x54\x41\x56\x48\x8D\xA8</pre></td><td><pre>48 8B C4 55 53 56 41 54 41 56 48 8D A8</pre></td></tr>
</table>

### EmitSound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x89\xD8\x48\x8B\x5D\x2A\xC9\xC3\xCC\xCC\xCC\xCC\xCC\xCC\x48\xB8</pre></td><td><pre>55 48 89 E5 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 48 89 D8 48 8B 5D ? C9 C3 CC CC CC CC CC CC 48 B8</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x4C\x89\x4C\x24\x2A\x48\x8B\xD9\x45\x8B\xC8</pre></td><td><pre>40 53 48 83 EC ? 4C 89 4C 24 ? 48 8B D9 45 8B C8</pre></td></tr>
</table>

### Friction

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\x47</pre></td><td><pre>55 48 89 E5 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 8B 47</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x81\xEC\xA0\x00\x00\x00\x48\x83\x79</pre></td><td><pre>48 89 5C 24 ? 57 48 81 EC A0 00 00 00 48 83 79</pre></td></tr>
</table>

### FullWalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x84\xD2</pre></td><td><pre>55 48 89 E5 41 54 49 89 F4 53 48 89 FB 84 D2</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xFA\x48\x8B\xD9\x45\x84\xC0\x75</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 8B FA 48 8B D9 45 84 C0 75</pre></td></tr>
</table>

### GameEventManager

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x4C\x8D\x25\x2A\x2A\x2A\x2A\x31\xDB\x48\x83\xEC\x08</pre></td><td><pre>4C 8D 25 ? ? ? ? 31 DB 48 83 EC 08</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8D\x0D\x2A\x2A\x2A\x2A\x49\x8B\x04\x38</pre></td><td><pre>48 8D 0D ? ? ? ? 49 8B 04 38</pre></td></tr>
</table>

### GetLegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x85\xC9</pre></td><td><pre>48 8B 15 ? ? ? ? 48 85 D2 74 ? 85 C9</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x83\xFF\x2A\x77\x2A\x48\x63\xFF\x48\xC1\xE7\x2A\x48\x8D\x44\x38</pre></td><td><pre>48 8B 05 ? ? ? ? 48 85 C0 74 ? 83 FF ? 77 ? 48 63 FF 48 C1 E7 ? 48 8D 44 38</pre></td></tr>
</table>

### LadderMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x2A\x2A\x2A\x2A\x41\x54\x49\x89\xF4</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD ? ? ? ? 41 54 49 89 F4</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9</pre></td><td><pre>40 55 53 56 57 41 57 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 48 8B F9</pre></td></tr>
</table>

### MoveInit

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x89\xF7\x48\x83\xEC\x70</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 89 F7 48 83 EC 70</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x68\x2A\x56\x57\x41\x54\x48\x81\xEC\xD0\x00\x00\x00</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 68 ? 56 57 41 54 48 81 EC D0 00 00 00</pre></td></tr>
</table>

### OnJumpLegacy

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x88\x00\x00\x00\x4C\x8B\x6F</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 81 EC 88 00 00 00 4C 8B 6F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\xA8\x00\x00\x00\x48\x8B\x71</pre></td><td><pre>40 55 53 56 57 48 8D 6C 24 ? 48 81 EC A8 00 00 00 48 8B 71</pre></td></tr>
</table>

### OnJumpModern

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x57\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\x71</pre></td><td><pre>40 55 56 57 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B 71</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\x77\x2A\x4D\x8B\x66</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 81 EC ? ? ? ? 4C 8B 77 ? 4D 8B 66</pre></td></tr>
</table>

### PhysicsSimulate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x00\x00\x00</pre></td><td><pre>55 ? ? ? ? ? ? ? ? ? ? ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 81 EC ? 00 00 00</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x53\x56\x57\x41\x55\x41\x56\x48\x8D\xAC\x24\x08\xF9\xFF\xFF</pre></td><td><pre>40 55 53 56 57 41 55 41 56 48 8D AC 24 08 F9 FF FF</pre></td></tr>
</table>

### PlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x18\x48\x8B\x7F\x38</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC 18 48 8B 7F 38</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x50\x48\x83\x79</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC 50 48 83 79</pre></td></tr>
</table>

### PostThink

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x80\xBB</pre></td><td><pre>55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 80 BB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x41\x54\x48\x8B\xEC\x48\x83\xEC\x50</pre></td><td><pre>40 55 56 41 54 48 8B EC 48 83 EC 50</pre></td></tr>
</table>

### ProcessMovement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 83 EC ? 48 8B 7F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x57\x41\x57\x48\x81\xEC\xB8\x00\x00\x00</pre></td><td><pre>40 57 41 57 48 81 EC B8 00 00 00</pre></td></tr>
</table>

### ProcessUsercmds

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x48\x89\x4D</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC 48 89 4D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x44\x88\x48\x20\x44\x89\x40\x18\x48\x89\x50\x10\x53</pre></td><td><pre>48 8B C4 44 88 48 20 44 89 40 18 48 89 50 10 53</pre></td></tr>
</table>

### RemoveEntity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x89\xFE\x48\x85\xFF\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48</pre></td><td><pre>48 89 FE 48 85 FF 74 ? 48 8D 05 ? ? ? ? 48</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x85\xC9\x74\x2A\x48\x8B\xD1\x48\x8B\x0D\x2A\x2A\x2A\x2A</pre></td><td><pre>48 85 C9 74 ? 48 8B D1 48 8B 0D ? ? ? ?</pre></td></tr>
</table>

### SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x78\xF3\x0F\x11\x85</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 FD 41 54 53 48 89 F3 48 83 EC 78 F3 0F 11 85</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x4C\x24\x2A\x53\x41\x55\x41\x56</pre></td><td><pre>48 89 4C 24 ? 53 41 55 41 56</pre></td></tr>
</table>

### SetupMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x49\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x48\xE8\x2A\x2A\x2A\x2A\x48\x8B\x43\x38</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 D4 53 48 89 FB 48 83 EC 48 E8 ? ? ? ? 48 8B 43 38</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x56\x48\x83\xEC\x68\x48\x89\x6C\x24</pre></td><td><pre>40 53 56 48 83 EC 68 48 89 6C 24</pre></td></tr>
</table>

### SnapViewAngles

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x48\x89\xF7\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8</pre></td><td><pre>55 48 89 E5 41 57 49 89 FF 48 89 F7 41 56 41 55 41 54 53 48 81 EC ? ? ? ? E8</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x7C\x24\x2A\x55\x48\x8B\xEC\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xF9\x48\x8D\x4D\x2A\xE8\x2A\x2A\x2A\x2A\xF2\x0F\x10\x87</pre></td><td><pre>48 89 7C 24 ? 55 48 8B EC 48 81 EC ? ? ? ? 48 8B F9 48 8D 4D ? E8 ? ? ? ? F2 0F 10 87</pre></td></tr>
</table>

### TraceShape

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x48\x8D\x35\x2A\x2A\x2A\x2A\x49\x89\xCE</pre></td><td><pre>55 48 8D 05 ? ? ? ? 48 89 E5 41 57 49 89 F7 41 56 48 8D 35 ? ? ? ? 49 89 CE</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x53\x56\x57\x41\x54\x41\x56\x41\x57</pre></td><td><pre>48 89 54 24 ? 48 89 4C 24 ? 55 53 56 57 41 54 41 56 41 57</pre></td></tr>
</table>

### TryPlayerMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 49 89 F6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x4C\x89\x48\x2A\x4C\x89\x40\x2A\x48\x89\x50\x2A\x48\x89\x48\x2A\x55\x53\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70</pre></td><td><pre>48 8B C4 4C 89 48 ? 4C 89 40 ? 48 89 50 ? 48 89 48 ? 55 53 56 57 41 54 41 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70</pre></td></tr>
</table>

### WalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x00\x00\x00\x00\x00\x00\x80\x3F\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD\x2A\x2A\x2A\x2A\x41\x55\x49\x89\xF5</pre></td><td><pre>48 B8 00 00 00 00 00 00 80 3F 55 66 0F EF C0 48 89 E5 41 57 41 56 4C 8D BD ? ? ? ? 41 55 49 89 F5</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x70\x2A\x48\x89\x78\x2A\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70\x2A\x48\x8B\xF1</pre></td><td><pre>48 8B C4 48 89 70 ? 48 89 78 ? 55 41 54 41 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70 ? 48 8B F1</pre></td></tr>
</table>

### WaterMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x8D\xAD\x2A\x2A\x2A\x2A\x41\x54\x49\x89\xFC\x4C\x89\xEF\x53\x48\x89\xF3\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x0F\x29\x85\x2A\x2A\x2A\x2A\x48\xC7\x85\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC7\x45\x2A\x2A\x2A\x2A\x2A\x48\x89\x85\x2A\x2A\x2A\x2A\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8D\x8D</pre></td><td><pre>48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 4C 8D AD ? ? ? ? 41 54 49 89 FC 4C 89 EF 53 48 89 F3 48 81 EC ? ? ? ? 48 89 85 ? ? ? ? 48 8B 05 ? ? ? ? 0F 29 85 ? ? ? ? 48 C7 85 ? ? ? ? ? ? ? ? 48 C7 45 ? ? ? ? ? 48 89 85 ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 48 89 45 ? E8 ? ? ? ? 48 8D 8D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x70\x2A\x48\x89\x78\x2A\x4C\x89\x60\x2A\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x80\x02\x00\x00</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 70 ? 48 89 78 ? 4C 89 60 ? 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC 80 02 00 00</pre></td></tr>
</table>
