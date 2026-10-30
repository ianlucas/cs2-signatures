# cs2-ss2-deathmatch

Last updated: October 30, 2026 at 10:14:58 PM GMT

* Manifests: [4494425425081083634](https://steamdb.info/depot/2347771/history/?changeid=M:4494425425081083634), [6232960523750647649](https://steamdb.info/depot/2347773/history/?changeid=M:6232960523750647649), [6694633556888099985](https://steamdb.info/depot/2347770/history/?changeid=M:6694633556888099985)
* Repository: https://github.com/ianlucas/cs2-ss2-deathmatch
* Gamedata: https://github.com/ianlucas/cs2-ss2-deathmatch/blob/main/resources/gamedata/signatures.jsonc

## Signatures

### CCSBot::IsVisible

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x4C\x8D\x7D\x2A\x41\x56\x41\x89\xD6</pre></td><td><pre>55 48 8D 05 ? ? ? ? 48 89 E5 41 57 4C 8D 7D ? 41 56 41 89 D6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x44\x88\x44\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05</pre></td><td><pre>48 89 5C 24 ? 44 88 44 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8D 6C 24 ? 48 81 EC ? ? ? ? 48 8D 05</pre></td></tr>
</table>

### DeathmatchScorePatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\xE8\x2A\x2A\x2A\x2A\x58\x5A\x48\x8D\x65\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x90\x45\x84\xF6</pre></td><td><pre>E8 ? ? ? ? 58 5A 48 8D 65 ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 90 45 84 F6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\xE8\x2A\x2A\x2A\x2A\x48\x8B\xAC\x24\x2A\x2A\x2A\x2A\x4C\x8D\x9C\x24</pre></td><td><pre>E8 ? ? ? ? 48 8B AC 24 ? ? ? ? 4C 8D 9C 24</pre></td></tr>
</table>

### RandomSpawnPatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x84\x2A\x2A\x2A\x2A\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x8B\x52\x2A\x8B\x52</pre></td><td><pre>0F 84 ? ? ? ? 48 8D 15 ? ? ? ? 48 8B 52 ? 8B 52</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x8B\x48\x2A\x0F\xB6\x87</pre></td><td><pre>74 ? 48 8B 05 ? ? ? ? 8B 48 ? 0F B6 87</pre></td></tr>
</table>

### RespawnSoundPatch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x72\x2A\x4C\x89\x74\x24\x2A\x4C\x8D\x05</pre></td><td><pre>72 ? 4C 89 74 24 ? 4C 8D 05</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x0F\x86\x2A\x2A\x2A\x2A\x48\x8D\xBD\x2A\x2A\x2A\x2A\x45\x31\xC9</pre></td><td><pre>0F 86 ? ? ? ? 48 8D BD ? ? ? ? 45 31 C9</pre></td></tr>
</table>
