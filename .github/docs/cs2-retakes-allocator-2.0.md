# cs2-retakes-allocator-2.0

Last updated: September 25, 2026 at 9:54:44 PM GMT

* Manifests: [3558451520161040527](https://steamdb.info/depot/2347771/history/?changeid=M:3558451520161040527), [6313884916170234593](https://steamdb.info/depot/2347770/history/?changeid=M:6313884916170234593), [7484770979211644490](https://steamdb.info/depot/2347773/history/?changeid=M:7484770979211644490)
* Repository: https://github.com/Micka2302/cs2-retakes-allocator-2.0
* Gamedata: https://github.com/Micka2302/cs2-retakes-allocator-2.0/blob/main/Resources/RetakesAllocator_gamedata.json

## Signatures

### CCSPlayer_ItemServices_CanAcquire

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6\x41\x55\x41\x54\x49\x89\xCC\x53\x48\x89\xFB\x48\x83\xEC\x2A\x4C\x8B\x6F\x2A\x89\x55\x2A\x4D\x85\xED</pre></td><td><pre>55 48 89 E5 41 57 41 56 49 89 F6 41 55 41 54 49 89 CC 53 48 89 FB 48 83 EC ? 4C 8B 6F ? 89 55 ? 4D 85 ED</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x4C\x24\x2A\x55\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xE9</pre></td><td><pre>48 89 4C 24 ? 55 48 81 EC ? ? ? ? 48 8B E9</pre></td></tr>
</table>

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\x3E\x2A\x75\x2A\x31\xC0\x48\x81\xC4\x2A\x2A\x2A\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x4C\x8D\xA5\x2A\x2A\x2A\x2A\x89\xFB</pre></td><td><pre>48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 81 EC ? ? ? ? 80 3E ? 75 ? 31 C0 48 81 C4 ? ? ? ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 80 ? ? ? ? 4C 8D A5 ? ? ? ? 89 FB</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x33\xFF\x4C\x8B\xCA\x8B\xD9</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 33 FF 4C 8B CA 8B D9</pre></td></tr>
</table>

### GiveNamedItem2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x45\x31\xC9\x45\x31\xC0\x31\xC9\x31\xD2\xE9\x2A\x2A\x2A\x2A\xCC\x55\x45\x31\xC9</pre></td><td><pre>45 31 C9 45 31 C0 31 C9 31 D2 E9 ? ? ? ? CC 55 45 31 C9</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x2A\x48\xC7\x44\x24\x2A\x2A\x2A\x2A\x2A\x45\x33\xC9\x45\x33\xC0\xC6\x44\x24\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x2A\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x83\xEC</pre></td><td><pre>48 83 EC ? 48 C7 44 24 ? ? ? ? ? 45 33 C9 45 33 C0 C6 44 24 ? ? E8 ? ? ? ? 48 83 C4 ? C3 CC CC CC CC CC CC CC CC CC CC CC CC CC CC 48 83 EC</pre></td></tr>
</table>
