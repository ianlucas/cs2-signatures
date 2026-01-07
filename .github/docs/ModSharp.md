# ModSharp 

Last updated: January 7, 2026 at 4:36:33 PM UTC

* Manifests: [8348690621754004818](https://steamdb.info/depot/2347770/history/?changeid=M:8348690621754004818), [3970280707550781410](https://steamdb.info/depot/2347771/history/?changeid=M:3970280707550781410), [8128465550651630543](https://steamdb.info/depot/2347773/history/?changeid=M:8128465550651630543)
* Repository: https://github.com/Kxnrl/modsharp-public
* Gamedata: https://github.com/Kxnrl/modsharp-public/blob/master/.asset/gamedata/core.games.jsonc, https://github.com/Kxnrl/modsharp-public/blob/master/.asset/gamedata/engine.games.jsonc, https://github.com/Kxnrl/modsharp-public/blob/master/.asset/gamedata/log.games.jsonc, https://github.com/Kxnrl/modsharp-public/blob/master/.asset/gamedata/server.games.jsonc, https://github.com/Kxnrl/modsharp-public/blob/master/.asset/gamedata/tier0.games.jsonc

## Signatures

### CAttributeList::SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x78\xF3\x0F\x11\x85\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53 48 89 F3 48 83 EC 78 F3 0F 11 85 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x55\x41\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x74\x24\x70
</pre>
</td><td>
<pre>
40 53 55 41 56 48 81 EC ? ? ? ? 0F 29 74 24 70
</pre>
</td></tr></table>

### CBaseEntity::AbsAngles

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x83\xEC\x2A\x48\x8B\x9F\x2A\x2A\x2A\x2A\x80\xBB\x2A\x2A\x2A\x2A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x74\x2A\x66\x0F\x1F\x44\x00\x2A\x48\x89\xDF\xE8\x2A\x2A\x2A\x2A\x48\x8D\x83\x2A\x2A\x2A\x2A\x48\x8B\x5D\x2A\xC9\xC3\xCC\xCC\xCC\x55\x48\x89\xE5\x53\x48\x83\xEC\x2A\x48\x8B\x9F\x2A\x2A\x2A\x2A\x80\xBB\x2A\x2A\x2A\x2A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x74\x2A\x66\x0F\x1F\x44\x00\x2A\x48\x89\xDF\xE8\x2A\x2A\x2A\x2A\xF3\x0F\x10\x83
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 83 EC ? 48 8B 9F ? ? ? ? 80 BB ? ? ? ? ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 74 ? 66 0F 1F 44 00 ? 48 89 DF E8 ? ? ? ? 48 8D 83 ? ? ? ? 48 8B 5D ? C9 C3 CC CC CC 55 48 89 E5 53 48 83 EC ? 48 8B 9F ? ? ? ? 80 BB ? ? ? ? ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 74 ? 66 0F 1F 44 00 ? 48 89 DF E8 ? ? ? ? F3 0F 10 83
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\x99\x70\x02\x00\x00\x90\x80\xBB\xFC\x00\x00\x00\x2A\x75\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x8D\x83\xDC\x00\x00\x00
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B 99 70 02 00 00 90 80 BB FC 00 00 00 ? 75 ? 48 8B CB E8 ? ? ? ? 84 C0 74 ? 48 8B CB E8 ? ? ? ? 48 8D 83 DC 00 00 00
</pre>
</td></tr></table>

### CBaseEntity::AbsOrigin

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x83\xEC\x2A\x48\x8B\x9F\x2A\x2A\x2A\x2A\x80\xBB\x2A\x2A\x2A\x2A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x74\x2A\x66\x0F\x1F\x44\x00\x2A\x48\x89\xDF\xE8\x2A\x2A\x2A\x2A\x48\x8D\x83\x2A\x2A\x2A\x2A\x48\x8B\x5D\x2A\xC9\xC3\xCC\xCC\xCC\x55\x48\x89\xE5\x53\x48\x83\xEC\x2A\x48\x8B\x9F\x2A\x2A\x2A\x2A\x80\xBB\x2A\x2A\x2A\x2A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x83\x2A\x2A\x2A\x2A\x0F\x2E\x05\x2A\x2A\x2A\x2A\x7A\x2A\x74\x2A\x66\x0F\x1F\x44\x00\x2A\x48\x89\xDF\xE8\x2A\x2A\x2A\x2A\x48\x8D\x83
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 83 EC ? 48 8B 9F ? ? ? ? 80 BB ? ? ? ? ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 74 ? 66 0F 1F 44 00 ? 48 89 DF E8 ? ? ? ? 48 8D 83 ? ? ? ? 48 8B 5D ? C9 C3 CC CC CC 55 48 89 E5 53 48 83 EC ? 48 8B 9F ? ? ? ? 80 BB ? ? ? ? ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 75 ? F3 0F 10 83 ? ? ? ? 0F 2E 05 ? ? ? ? 7A ? 74 ? 66 0F 1F 44 00 ? 48 89 DF E8 ? ? ? ? 48 8D 83
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\x99\x70\x02\x00\x00\x90\x80\xBB\xFC\x00\x00\x00\x2A\x75\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x84\xC0\x74\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x8D\x83\xD0\x00\x00\x00
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B 99 70 02 00 00 90 80 BB FC 00 00 00 ? 75 ? 48 8B CB E8 ? ? ? ? 84 C0 74 ? 48 8B CB E8 ? ? ? ? 48 8D 83 D0 00 00 00
</pre>
</td></tr></table>

### CBaseEntity::AbsVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x80\xBF\x2A\x2A\x2A\x2A\x2A\x74\x2A\xF6\x87\x2A\x2A\x2A\x2A\x2A\x75\x2A\x48\x8B\x83\x2A\x2A\x2A\x2A\x48\x89\x45
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC ? 80 BF ? ? ? ? ? 74 ? F6 87 ? ? ? ? ? 75 ? 48 8B 83 ? ? ? ? 48 89 45
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x2A\x80\xB9\xF4\x02\x00\x00\x2A\x48\x8B\xFA\x48\x8B\xD9\x0F\x85\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC ? 80 B9 F4 02 00 00 ? 48 8B FA 48 8B D9 0F 85 ? ? ? ?
</pre>
</td></tr></table>

### CBaseEntity::AcceptInput

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
\x48\x89\x5C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x83\xEC\x2A\x49\x8B\xF0\x48\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 57 48 83 EC ? 49 8B F0 48 8B D9
</pre>
</td></tr></table>

### CBaseEntity::ApplyAbsVelocityImpulse

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x49\x89\xF4
</pre>
</td><td>
<pre>
55 66 0F EF C0 48 89 E5 41 56 41 55 49 89 FD 41 54 49 89 F4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x20\x56\x48\x83\xEC\x2A\x0F\x57\xC0
</pre>
</td><td>
<pre>
48 89 5C 24 20 56 48 83 EC ? 0F 57 C0
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

### CBaseEntity::DispatchTraceAttack

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
\x40\x55\x41\x54\x41\x55\x41\x56\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x6C\x24\x30
</pre>
</td><td>
<pre>
40 55 41 54 41 55 41 56 41 57 48 81 EC ? ? ? ? 48 8D 6C 24 30
</pre>
</td></tr></table>

### CBaseEntity::EmitSoundFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x66\x41\x0F\x7E\xC7\x41\x56\x4D\x89\xC6
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 66 41 0F 7E C7 41 56 4D 89 C6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x49\x8B\xF9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B DA 49 8B F9
</pre>
</td></tr></table>

### CBaseEntity::EnableHammerUniqueId

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x31\xC0\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xB8\x2A\x2A\x2A\x2A\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x0F\xB6\x87\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
31 C0 C3 CC CC CC CC CC CC CC CC CC CC CC CC CC B8 ? ? ? ? C3 CC CC CC CC CC CC CC CC CC CC C3 CC CC CC CC CC CC CC CC CC CC CC CC CC CC CC 0F B6 87 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x32\xC0\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x33\xC0\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xC2\x00\x00
</pre>
</td><td>
<pre>
32 C0 C3 CC CC CC CC CC CC CC CC CC CC CC CC CC 33 C0 C3 CC CC CC CC CC CC CC CC CC CC CC CC CC C2 00 00
</pre>
</td></tr></table>

### CBaseEntity::LocalVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x80\xBF\x2A\x2A\x2A\x2A\x2A\x74\x2A\x48\x8B\x87
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC ? 80 BF ? ? ? ? ? 74 ? 48 8B 87
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x57\x48\x83\xEC\x2A\x80\xB9\xF4\x02\x00\x00\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 18 57 48 83 EC ? 80 B9 F4 02 00 00 ?
</pre>
</td></tr></table>

### CBaseEntity::SetAbsAngles

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x0F\x14\xC1\x48\x89\xE5\x48\x83\xEC\x10\x48\x8D\x75\xF0\x0F\x13\x45\xF0\xF3\x0F\x11\x55\x2A\xE8\x2A\x2A\x2A\x2A\xC9\xC3\xCC\x83\xFF\x06
</pre>
</td><td>
<pre>
55 0F 14 C1 48 89 E5 48 83 EC 10 48 8D 75 F0 0F 13 45 F0 F3 0F 11 55 ? E8 ? ? ? ? C9 C3 CC 83 FF 06
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x30\x48\x8B\xD9\x48\x8D\x4C\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8D\x54\x24\x2A\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x30\x5B\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x40\x53
</pre>
</td><td>
<pre>
40 53 48 83 EC 30 48 8B D9 48 8D 4C 24 ? E8 ? ? ? ? 48 8D 54 24 ? 48 8B CB E8 ? ? ? ? 48 83 C4 30 5B C3 CC CC CC CC CC CC CC CC CC CC 40 53
</pre>
</td></tr></table>

### CBaseEntity::SetAbsOrigin

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x07\x48\x8B\x80\x2A\x2A\x2A\x2A\x48\x39\xD0\x75\x2A\x48\x8B\xBB
</pre>
</td><td>
<pre>
55 48 8D 15 ? ? ? ? 48 89 E5 41 54 53 48 89 FB 48 83 EC ? 48 8B 07 48 8B 80 ? ? ? ? 48 39 D0 75 ? 48 8B BB
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x40\x48\x8B\x01\x48\x8B\xFA
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC 40 48 8B 01 48 8B FA
</pre>
</td></tr></table>

### CBaseEntity::SetAbsVelocity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x80\xBF\x2A\x2A\x2A\x2A\x2A\x0F\x84\x2A\x2A\x2A\x2A\xF3\x0F\x10\x87\x2A\x2A\x2A\x2A\x0F\x2E\x06\x7A\x2A\x75\x2A\xF3\x0F\x10\x87\x2A\x2A\x2A\x2A\x0F\x2E\x46\x2A\x7A\x2A\x75\x2A\xF3\x0F\x10\x87\x2A\x2A\x2A\x2A\x0F\x2E\x46\x2A\x7A\x2A\x0F\x84
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 80 BF ? ? ? ? ? 0F 84 ? ? ? ? F3 0F 10 87 ? ? ? ? 0F 2E 06 7A ? 75 ? F3 0F 10 87 ? ? ? ? 0F 2E 46 ? 7A ? 75 ? F3 0F 10 87 ? ? ? ? 0F 2E 46 ? 7A ? 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x48\x89\x74\x24\x20\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\xB9\xF4\x02\x00\x00\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 48 89 74 24 20 57 48 81 EC ? ? ? ? 80 B9 F4 02 00 00 ?
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

### CBaseEntity::SetGroundEntity

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
\x48\x89\x5C\x24\x18\x48\x89\x6C\x24\x20\x56\x57\x41\x54\x48\x83\xEC\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 18 48 89 6C 24 20 56 57 41 54 48 83 EC ?
</pre>
</td></tr></table>

### CBaseEntity::SetMoveType

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
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x56\x48\x83\xEC\x2A\x41\x0F\xB6\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 56 48 83 EC ? 41 0F B6 F0
</pre>
</td></tr></table>

### CBaseEntity::StopSound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xDB
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 F3 48 83 EC ? E8 ? ? ? ? 48 85 DB
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x56\x48\x83\xEC\x2A\x48\x8B\xF2\x48\x8D\x54\x24\x58
</pre>
</td><td>
<pre>
48 89 5C 24 18 56 48 83 EC ? 48 8B F2 48 8D 54 24 58
</pre>
</td></tr></table>

### CBaseModelEntity::GetBoneTransform

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x41\x89\xF4\x53\x48\x89\xD3
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 FE 41 55 41 54 41 89 F4 53 48 89 D3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x83\xEC\x2A\x48\x8B\xE9\x49\x8B\xF0\x48\x8B\x89\x70\x02\x00\x00
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 57 48 83 EC ? 48 8B E9 49 8B F0 48 8B 89 70 02 00 00
</pre>
</td></tr></table>

### CBaseModelEntity::LookupBone

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x8B\xBF\x2A\x2A\x2A\x2A\x48\x8B\x07\xFF\x50\x2A\x48\x89\xDE\x48\x8B\x5D\x2A\xC9\x48\x89\xC7\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x55\x48\x89\xE5\x53\x89\xF3
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 F3 48 83 EC ? 48 8B BF ? ? ? ? 48 8B 07 FF 50 ? 48 89 DE 48 8B 5D ? C9 48 89 C7 E9 ? ? ? ? CC CC CC CC CC CC CC 55 48 89 E5 53 89 F3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\x89\x70\x02\x00\x00\x48\x8B\xDA\x48\x8B\x01\xFF\x50\x38\x48\x8B\xC8
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B 89 70 02 00 00 48 8B DA 48 8B 01 FF 50 38 48 8B C8
</pre>
</td></tr></table>

### CBaseModelEntity::SetBodyGroupByName

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

### CBaseModelEntity::SetCollisionBounds

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x81\xC7\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\x55\x48\x8D\x15
</pre>
</td><td>
<pre>
48 81 C7 ? ? ? ? E9 ? ? ? ? CC CC CC CC 55 48 8D 15
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x81\xC1\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x44\x8B\x05
</pre>
</td><td>
<pre>
48 81 C1 ? ? ? ? E9 ? ? ? ? CC CC CC CC 48 89 5C 24 ? 57 48 83 EC ? 44 8B 05
</pre>
</td></tr></table>

### CBaseModelEntity::SetMaterialGroupMask

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x47\x2A\x48\x8B\x10\x48\x85\xD2\x74\x2A\x48\x8B\x40\x2A\x48\x8D\x0D\x2A\x2A\x2A\x2A\x48\x8B\x40\x2A\x48\x63\x49\x2A\x0F\xB7\x04\x48\x66\x83\xF8\x2A\x74\x2A\x55
</pre>
</td><td>
<pre>
48 8B 47 ? 48 8B 10 48 85 D2 74 ? 48 8B 40 ? 48 8D 0D ? ? ? ? 48 8B 40 ? 48 63 49 ? 0F B7 04 48 66 83 F8 ? 74 ? 55
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x56\x48\x83\xEC\x20\x48\x8B\x41\x10
</pre>
</td><td>
<pre>
48 89 5C 24 10 56 48 83 EC 20 48 8B 41 10
</pre>
</td></tr></table>

### CBaseModelEntity::SetModelScale

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x07\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x8B\x80\x2A\x2A\x2A\x2A\x48\x39\xD0\x75\x2A\x55\x48\x89\xE5\x48\x83\xEC
</pre>
</td><td>
<pre>
48 8B 07 48 8D 15 ? ? ? ? 48 8B 80 ? ? ? ? 48 39 D0 75 ? 55 48 89 E5 48 83 EC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x2A\x48\x8B\x89\x70\x02\x00\x00\x0F\x29\x74\x24\x20
</pre>
</td><td>
<pre>
48 83 EC ? 48 8B 89 70 02 00 00 0F 29 74 24 20
</pre>
</td></tr></table>

### CBasePlayerController::CheckPawn

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x80\xBF\x2A\x2A\x2A\x2A\x2A\x0F\x84
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 53 48 89 FB 48 83 EC ? 80 BF ? ? ? ? ? 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x80\xB9\x2A\x2A\x2A\x2A\x2A\x48\x8B\xD9\x0F\x84
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 80 B9 ? ? ? ? ? 48 8B D9 0F 84
</pre>
</td></tr></table>

### CBasePlayerController::HandleCommandJoinTeam

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x41\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8D\x05
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 41 89 F4 53 48 89 FB 48 81 EC ? ? ? ? 48 8D 05
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x44\x88\x44\x24\x18\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\x80
</pre>
</td><td>
<pre>
48 89 5C 24 08 44 88 44 24 18 55 56 57 41 54 41 55 41 56 41 57 48 8D 6C 24 80
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
\x44\x88\x4C\x24\x20\x53\x57
</pre>
</td><td>
<pre>
44 88 4C 24 20 53 57
</pre>
</td></tr></table>

### CBasePlayerController::SwitchSteam

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

### CBasePlayerPawn::FindMatchingWeaponsForTeamLoadout

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xF6\x41\x55\x41\x54\x41\x89\xD4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x89\x75
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 F6 41 55 41 54 41 89 D4 53 48 89 FB 48 83 EC ? 48 89 75
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x44\x88\x4C\x24\x20
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 44 88 4C 24 20
</pre>
</td></tr></table>

### CCSGOVScriptGameSystem::DestroyVM

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x83\xEF\x2A\xE9\x2A\x2A\x2A\x2A\xCC\x48\x8B\x04\x25\x2A\x2A\x2A\x2A\x0F\x0B\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x89\xF2
</pre>
</td><td>
<pre>
48 83 EF ? E9 ? ? ? ? CC 48 8B 04 25 ? ? ? ? 0F 0B CC CC CC CC CC CC CC CC CC CC CC CC 48 89 F2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x4C\x8B\x15\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 4C 8B 15 ? ? ? ?
</pre>
</td></tr></table>

### CCSGameRules::Constructor

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x83\x3D\x2A\x2A\x2A\x2A\x2A\x48\x89\x07\x48\xC7\x47\x2A\x2A\x2A\x2A\x2A\x74\x2A\xE8\x2A\x2A\x2A\x2A\x66\x48\x8D\x3D\x2A\x2A\x2A\x2A\x66\x66\x48\xE8\x2A\x2A\x2A\x2A\x48\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\xC7\x43\x2A\x2A\x2A\x2A\x2A\xC7\x43\x2A\x2A\x2A\x2A\x2A\xC6\x43\x2A\x2A\x48\xC7\x83
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 53 48 89 FB 48 83 EC ? 48 83 3D ? ? ? ? ? 48 89 07 48 C7 47 ? ? ? ? ? 74 ? E8 ? ? ? ? 66 48 8D 3D ? ? ? ? 66 66 48 E8 ? ? ? ? 48 C7 43 ? ? ? ? ? 48 C7 43 ? ? ? ? ? 48 C7 43 ? ? ? ? ? C7 43 ? ? ? ? ? C6 43 ? ? 48 C7 83
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x2A\x8B\x15\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x01\x33\xF6\x65\x48\x8B\x04\x25\x2A\x2A\x2A\x2A\x48\x8B\xD9\x48\x89\x71\x08\x48\x8B\x3C\xD0\xB8\x2A\x2A\x2A\x2A\x40\x38\x34\x38\x75\x2A\xE8\x2A\x2A\x2A\x2A\xB8\x2A\x2A\x2A\x2A\x48\x8B\x04\x38\x48\x89\x43\x08\x48\x89\x73\x18
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 57 48 83 EC ? 8B 15 ? ? ? ? 48 8D 05 ? ? ? ? 48 89 01 33 F6 65 48 8B 04 25 ? ? ? ? 48 8B D9 48 89 71 08 48 8B 3C D0 B8 ? ? ? ? 40 38 34 38 75 ? E8 ? ? ? ? B8 ? ? ? ? 48 8B 04 38 48 89 43 08 48 89 73 18
</pre>
</td></tr></table>

### CCSGameRules::CreateEndMatchMapGroupVoteOptions

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\x48\x8D\x1D
</pre>
</td><td>
<pre>
55 BE ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 8D 3D ? ? ? ? 48 81 EC ? ? ? ? E8 ? ? ? ? 48 85 C0 0F 84 ? ? ? ? 48 8D 1D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x4C\x24\x08\x55\x41\x54\x48\x8D\x6C\x24\xB1
</pre>
</td><td>
<pre>
48 89 4C 24 08 55 41 54 48 8D 6C 24 B1
</pre>
</td></tr></table>

### CCSGameRules::PlayerCanHearChat

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF7\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xCE
</pre>
</td><td>
<pre>
55 48 89 F7 48 89 E5 41 57 41 56 41 89 CE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x56\x48\x83\xEC\x50\x48\x8B\xCA
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 56 48 83 EC 50 48 8B CA
</pre>
</td></tr></table>

### CCSGameRules::RestartRound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x35\x2A\x2A\x2A\x2A\xBA\x2A\x2A\x2A\x2A\x48\x89\xE5
</pre>
</td><td>
<pre>
55 48 8D 35 ? ? ? ? BA ? ? ? ? 48 89 E5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x48\x08\x55\x48\x8D\xA8\x08\xFC\xFF\xFF
</pre>
</td><td>
<pre>
48 8B C4 48 89 48 08 55 48 8D A8 08 FC FF FF
</pre>
</td></tr></table>

### CCSGameRules::TerminateRound

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
\x48\x8B\xC4\x4C\x89\x48\x20\x48\x89\x48\x08\x55\x56
</pre>
</td><td>
<pre>
48 8B C4 4C 89 48 20 48 89 48 08 55 56
</pre>
</td></tr></table>

### CCSGameRules::WillTeamHaveRoomForPlayer

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xD6\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x83\xEC\x2A\x48\x8D\x1D
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 D6 41 55 49 89 F5 41 54 53 48 83 EC ? 48 8D 1D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x56\x57\x41\x56\x48\x8B\xEC
</pre>
</td><td>
<pre>
48 8B C4 55 56 57 41 56 48 8B EC
</pre>
</td></tr></table>

### CCSPlayerController::ProcessUserCommands

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

### CCSPlayerPawn::GetPlayerMaxSpeed

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
\x44\x89\x44\x24\x18\x48\x89\x54\x24\x10\x48\x89\x4C\x24\x08\x55\x53\x56\x57\x41\x55\x41\x56\x41\x57\x48\x8B\xEC
</pre>
</td><td>
<pre>
44 89 44 24 18 48 89 54 24 10 48 89 4C 24 08 55 53 56 57 41 55 41 56 41 57 48 8B EC
</pre>
</td></tr></table>

### CCSPlayer_ItemServices::GiveGlove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x2A\x48\x8B\x5F\x2A\x48\x85\xDB
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 83 EC ? 48 8B 5F ? 48 85 DB
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x41\x56\x48\x83\xEC\x2A\x48\x83\x79\x30\x2A
</pre>
</td><td>
<pre>
40 55 41 56 48 83 EC ? 48 83 79 30 ?
</pre>
</td></tr></table>

### CCSPlayer_ItemServices::GiveNamedItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\xBD\x2A\x2A\x2A\x2A\x89\x95\x2A\x2A\x2A\x2A\x48\x89\x8D\x2A\x2A\x2A\x2A\x44\x89\x85
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 81 EC ? ? ? ? 48 89 BD ? ? ? ? 89 95 ? ? ? ? 48 89 8D ? ? ? ? 44 89 85
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x48\x89\x7C\x24\x20\x44\x89\x44\x24\x18
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 48 89 7C 24 20 44 89 44 24 18
</pre>
</td></tr></table>

### CCSPlayer_ItemServices::RemovePlayerItem

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
\x48\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xF9\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
48 85 D2 0F 84 ? ? ? ? 48 89 5C 24 08 57 48 83 EC ? 48 8B DA 48 8B F9 E8 ? ? ? ?
</pre>
</td></tr></table>

### CCSPlayer_MovementServices::Accelerate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x0F\x28\xF1\x48\x89\xE5
</pre>
</td><td>
<pre>
55 0F 28 F1 48 89 E5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x53\x41\x54\x41\x55\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\xF2\x41\x0F\x10\x01
</pre>
</td><td>
<pre>
48 8B C4 53 41 54 41 55 41 57 48 81 EC ? ? ? ? F2 41 0F 10 01
</pre>
</td></tr></table>

### CCSPlayer_MovementServices::ProcessMove

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
\x40\x57\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x83\x79\x30\x2A
</pre>
</td><td>
<pre>
40 57 41 57 48 81 EC ? ? ? ? 48 83 79 30 ?
</pre>
</td></tr></table>

### CCSPlayer_MovementServices::ProcessMovement_AssignMaxSpeed

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\xF3\x41\x0F\x11\xB7\x2A\x2A\x2A\x2A\x48\x83\x7F
</pre>
</td><td>
<pre>
F3 41 0F 11 B7 ? ? ? ? 48 83 7F
</pre>
</td></tr></table>

### CCSPlayer_MovementServices::TracePlayerBBox

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

### CCSPlayer_MovementServices::WalkMove

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\xBD\x2A\x2A\x2A\x2A\x41\x55\x4C\x8D\xB5
</pre>
</td><td>
<pre>
55 66 0F EF C0 48 89 E5 41 57 41 56 4C 8D BD ? ? ? ? 41 55 4C 8D B5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x70\x2A\x48\x89\x78\x2A\x55\x41\x56\x41\x57\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\x29\x70
</pre>
</td><td>
<pre>
48 8B C4 48 89 70 ? 48 89 78 ? 55 41 56 41 57 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 0F 29 70
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices::CanEquip

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x80\xBF\xD4\x00\x00\x00\x2A
</pre>
</td><td>
<pre>
48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 81 EC ? ? ? ? 80 BF D4 00 00 00 ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x56\x57\x41\x56\x41\x57\x48\x8D\xAC\x24\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\xFA
</pre>
</td><td>
<pre>
40 55 53 56 57 41 56 41 57 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 4C 8B FA
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices::CanSwitch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x85\xF6\x74
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 85 F6 74
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x10\x48\x89\x7C\x24\x18\x4C\x89\x74\x24\x20\x41\x57\x48\x83\xEC\x2A\x4C\x8B\xF2
</pre>
</td><td>
<pre>
48 89 74 24 10 48 89 7C 24 18 4C 89 74 24 20 41 57 48 83 EC ? 4C 8B F2
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices::DetachWeapon

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x44\x8B\x4F\x40
</pre>
</td><td>
<pre>
48 85 F6 0F 84 ? ? ? ? 55 48 89 E5 41 54 49 89 FC 53 44 8B 4F 40
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x57\x41\x56\x41\x57\x48\x83\xEC\x2A\x48\x8B\xDA\x48\x8B\xF1
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 57 41 56 41 57 48 83 EC ? 48 8B DA 48 8B F1
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices::EquipWeapon

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
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x2A\x48\x83\x79\x30\x2A\x48\x8B\xFA\x48\x8B\xD9\x75\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x53\x30
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC ? 48 83 79 30 ? 48 8B FA 48 8B D9 75 ? E8 ? ? ? ? 48 8B 53 30
</pre>
</td></tr></table>

### CCSPlayer_WeaponServices::GetWeaponBySlot

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x89\xF3\x48\x83\xEC\x2A\x48\x63\x77\x40
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 89 F3 48 83 EC ? 48 63 77 40
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x54\x41\x56\x41\x57\x48\x83\xEC\x20\x45\x33\xE4\x45\x8B\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 54 41 56 41 57 48 83 EC 20 45 33 E4 45 8B F0
</pre>
</td></tr></table>

### CCollisionProperty::SetSolid

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x40\x38\x77\x5B
</pre>
</td><td>
<pre>
40 38 77 5B
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x48\x89\x74\x24\x20\x57\x48\x83\xEC\x20\x0F\xB6\xFA
</pre>
</td><td>
<pre>
48 89 5C 24 18 48 89 74 24 20 57 48 83 EC 20 0F B6 FA
</pre>
</td></tr></table>

### CCommand::CCommand

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>tier0</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x41\x56\x41\x57\x48\x83\xEC\x2A\x33\xED\x48\x8D\xB1
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 41 56 41 57 48 83 EC ? 33 ED 48 8D B1
</pre>
</td></tr></table>

### CCommand::Tokenize

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>tier0</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xFF\x41\x56\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x2A\x8B\x57
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 FF 41 56 41 55 41 54 53 48 89 F3 48 83 EC ? 8B 57
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>tier0</td><td>
<pre>
\x48\x89\x6C\x24\x20\x4C\x89\x44\x24\x18\x56\x57\x41\x54
</pre>
</td><td>
<pre>
48 89 6C 24 20 4C 89 44 24 18 56 57 41 54
</pre>
</td></tr></table>

### CEntityIOOutput::FireOutput

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
\x4C\x89\x4C\x24\x20\x48\x89\x4C\x24\x08\x53\x56
</pre>
</td><td>
<pre>
4C 89 4C 24 20 48 89 4C 24 08 53 56
</pre>
</td></tr></table>

### CEntityIdentity::AcceptInput

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x49\x89\xD3\x48\x89\xE5\x41\x57\x45\x89\xCF
</pre>
</td><td>
<pre>
55 49 89 D3 48 89 E5 41 57 45 89 CF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x48\x89\x54\x24\x10\x48\x89\x4C\x24\x08\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8D\xAC\x24\x70\xFF\xFF\xFF
</pre>
</td><td>
<pre>
48 89 5C 24 18 48 89 54 24 10 48 89 4C 24 08 55 56 57 41 54 41 55 41 56 41 57 48 8D AC 24 70 FF FF FF
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
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC ? 48 8B D9 4C 8B C2
</pre>
</td></tr></table>

### CEntityInstance::GetEntityIndex

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x57\x2A\xB8\x2A\x2A\x2A\x2A\x48\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\xB9\x2A\x2A\x2A\x2A\x49\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x8B\x38\x48\x81\xC7\x2A\x2A\x2A\x2A\x66\x0F\x1F\x44\x00\x2A\x48\x8B\xB7\x2A\x2A\x2A\x2A\x48\x85\xF6\x74\x2A\x48\x39\xF2\x72\x2A\x48\x8D\x86\x2A\x2A\x2A\x2A\x48\x39\xC2\x73\x2A\x48\x89\xD0\x48\x29\xF0\x48\xC1\xF8\x2A\x49\x0F\xAF\xC0\x8D\x84\x01\x2A\x2A\x2A\x2A\x85\xC0\x79\x2A\x48\x8B\x37\x48\x85\xF6\x74\x2A\x48\x39\xF2\x72\x2A\x48\x8D\x86\x2A\x2A\x2A\x2A\x48\x39\xC2\x73\x2A\x48\x89\xD0\x48\x29\xF0\x48\xC1\xF8\x2A\x49\x0F\xAF\xC0\x01\xC8\x79\x2A\x81\xC1\x2A\x2A\x2A\x2A\x48\x83\xC7\x2A\x81\xF9\x2A\x2A\x2A\x2A\x75\x2A\xB8\x2A\x2A\x2A\x2A\xC3\x48\x8B\x37\x48\x85\xF6\x75\x2A\xEB\x2A\xCC\xCC\xCC\xCC\xCC\x55\x48\x89\xE5\x53
</pre>
</td><td>
<pre>
48 8B 57 ? B8 ? ? ? ? 48 85 D2 0F 84 ? ? ? ? 48 8D 05 ? ? ? ? B9 ? ? ? ? 49 B8 ? ? ? ? ? ? ? ? 48 8B 38 48 81 C7 ? ? ? ? 66 0F 1F 44 00 ? 48 8B B7 ? ? ? ? 48 85 F6 74 ? 48 39 F2 72 ? 48 8D 86 ? ? ? ? 48 39 C2 73 ? 48 89 D0 48 29 F0 48 C1 F8 ? 49 0F AF C0 8D 84 01 ? ? ? ? 85 C0 79 ? 48 8B 37 48 85 F6 74 ? 48 39 F2 72 ? 48 8D 86 ? ? ? ? 48 39 C2 73 ? 48 89 D0 48 29 F0 48 C1 F8 ? 49 0F AF C0 01 C8 79 ? 81 C1 ? ? ? ? 48 83 C7 ? 81 F9 ? ? ? ? 75 ? B8 ? ? ? ? C3 48 8B 37 48 85 F6 75 ? EB ? CC CC CC CC CC 55 48 89 E5 53
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x20\x4C\x8B\x41\x10\x48\x8B\xDA
</pre>
</td><td>
<pre>
40 53 48 83 EC 20 4C 8B 41 10 48 8B DA
</pre>
</td></tr></table>

### CEntityInstance::GetOrCreatePrivateScriptScope

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x83\x7F\x18\x2A\x74\x2A\xC3\x0F\x1F\x84\x00\x00\x00\x00\x00\x55\x48\x89\xE5\x53
</pre>
</td><td>
<pre>
48 83 7F 18 ? 74 ? C3 0F 1F 84 00 00 00 00 00 55 48 89 E5 53
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x20\x48\x83\x79\x18\x00\x48\x8B\xD9\x75\x2A\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
40 53 48 83 EC 20 48 83 79 18 00 48 8B D9 75 ? E8 ? ? ? ?
</pre>
</td></tr></table>

### CEntityInstance::GetOrCreatePublicScriptScope

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x53\x4C\x8B\x67\x10\x49\x8B\x44\x24\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 53 4C 8B 67 10 49 8B 44 24 ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x2A\x48\x8B\x79\x10
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC ? 48 8B 79 10
</pre>
</td></tr></table>

### CEntityInstance::GetRefEHandle

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x57\x10\xB8\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x8B\x42\x10\x8B\x4A\x30\xC1\xE8\x2A\x83\xE1\x2A\x29\xC8\x83\x7A\x10\x2A\x74\x2A\x0F\xB7\x52\x10\x66\x81\xE2\x2A\x2A\xC1\xE0\x2A\x0F\xB7\xD2\x09\xD0\xC3\x0F\x1F\x40\x00
</pre>
</td><td>
<pre>
48 8B 57 10 B8 ? ? ? ? 48 85 D2 74 ? 8B 42 10 8B 4A 30 C1 E8 ? 83 E1 ? 29 C8 83 7A 10 ? 74 ? 0F B7 52 10 66 81 E2 ? ? C1 E0 ? 0F B7 D2 09 D0 C3 0F 1F 40 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\xCA\x48\x85\xC9
</pre>
</td><td>
<pre>
4C 8B CA 48 85 C9
</pre>
</td></tr></table>

### CEntityInstance::Kill

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x08\x4C\x8D\x2D\x2A\x2A\x2A\x2A\x49\x8B\x7D\x00\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 FC 53 48 83 EC 08 4C 8D 2D ? ? ? ? 49 8B 7D 00 E8 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x57\x48\x83\xEC\x30\x48\x8B\xF9\x48\x8B\x0D\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
40 57 48 83 EC 30 48 8B F9 48 8B 0D ? ? ? ? E8 ? ? ? ?
</pre>
</td></tr></table>

### CEntityKeyValues::AddConnectionDesc

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x49\x89\xCF\x41\x56\x49\x89\xF6
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 49 89 CF 41 56 49 89 F6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x53\x41\x55\x48\x83\xEC\x78
</pre>
</td><td>
<pre>
48 8B C4 53 41 55 48 83 EC 78
</pre>
</td></tr></table>

### CEntityKeyValues::CEntityKeyValues

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\xC7\x47
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC ? 48 8D 05 ? ? ? ? 48 C7 47
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x33\xFF\x48\x8B\xD9\x48\x89\x79\x2A\x48\x89\x79\x2A\x44\x88\x41
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 33 FF 48 8B D9 48 89 79 ? 48 89 79 ? 44 88 41
</pre>
</td></tr></table>

### CEntityKeyValues::FindKeyValues

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x83\x3F\x2A\x0F\x84\x2A\x2A\x2A\x2A\x55\x31\xC9
</pre>
</td><td>
<pre>
48 83 3F ? 0F 84 ? ? ? ? 55 31 C9
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x83\x39\x2A\x49\x8B\xD8
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 83 39 ? 49 8B D8
</pre>
</td></tr></table>

### CEntityKeyValues::FindOrCreateKeyValues

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x8B\x06\x66\x83\x7F\x2A\x2A\x89\x45\x2A\x8B\x46\x2A\x89\x45\x2A\x0F\x8F
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 83 EC ? 8B 06 66 83 7F ? ? 89 45 ? 8B 46 ? 89 45 ? 0F 8F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x38\x8B\x02\x45\x33\xC0
</pre>
</td><td>
<pre>
48 83 EC 38 8B 02 45 33 C0
</pre>
</td></tr></table>

### CEntityKeyValues::RemoveKeyValues

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x66\x83\x7F\x2A\x2A\x7F\x2A\x55\x48\x89\xE5
</pre>
</td><td>
<pre>
66 83 7F ? ? 7F ? 55 48 89 E5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x53\x48\x83\xEC\x30
</pre>
</td><td>
<pre>
48 8B C4 53 48 83 EC 30
</pre>
</td></tr></table>

### CEntityKeyValues::SetString

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x49\x89\xD5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x8B\x3F
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 49 89 D5 41 54 49 89 F4 53 48 89 FB 48 8B 3F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x56\x48\x83\xEC\x2A\x48\x83\x39\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 56 48 83 EC ? 48 83 39 ?
</pre>
</td></tr></table>

### CEntityKeyValues::~CEntityKeyValues

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x2A\x48\x8B\x5F\x2A\x48\x85\xDB\x75
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 FC 53 48 83 EC ? 48 8B 5F ? 48 85 DB 75
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x83\xEC\x20\x48\x8B\x79\x08
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 57 48 83 EC 20 48 8B 79 08
</pre>
</td></tr></table>

### CGameEntitySystem::AddEntityIOEvent

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
\x48\x89\x5C\x24\x18\x4C\x89\x4C\x24\x20\x48\x89\x4C\x24\x08\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x2A\x49\x8B\xF9
</pre>
</td><td>
<pre>
48 89 5C 24 18 4C 89 4C 24 20 48 89 4C 24 08 55 56 57 41 54 41 55 41 56 41 57 48 83 EC ? 49 8B F9
</pre>
</td></tr></table>

### CGameEntitySystem::AddListenerEntity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xFD\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x2A\x8B\x8F\x2A\x2A\x2A\x2A\x4C\x63\xE1\x85\xC9\x7E\x2A\x48\x8B\x97\x2A\x2A\x2A\x2A\x4C\x63\xE1\x31\xC0\xEB\x2A\x66\x90\x48\x83\xC0\x2A\x4C\x39\xE0\x74\x2A\x48\x39\x1C\xC2\x75\x2A\x48\x83\xC4\x2A\x5B\x41\x5C\x41\x5D\x5D\xC3\x66\x0F\x1F\x44\x00\x2A\x41\x3B\x8D\x2A\x2A\x2A\x2A\x74\x2A\x49\x8B\x85\x2A\x2A\x2A\x2A\x83\xC1\x2A\x41\x89\x8D\x2A\x2A\x2A\x2A\x4A\x89\x1C\xE0\x48\x83\xC4
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 FD 41 54 53 48 89 F3 48 83 EC ? 8B 8F ? ? ? ? 4C 63 E1 85 C9 7E ? 48 8B 97 ? ? ? ? 4C 63 E1 31 C0 EB ? 66 90 48 83 C0 ? 4C 39 E0 74 ? 48 39 1C C2 75 ? 48 83 C4 ? 5B 41 5C 41 5D 5D C3 66 0F 1F 44 00 ? 41 3B 8D ? ? ? ? 74 ? 49 8B 85 ? ? ? ? 83 C1 ? 41 89 8D ? ? ? ? 4A 89 1C E0 48 83 C4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x6C\x24\x18\x48\x89\x7C\x24\x20\x41\x56\x48\x83\xEC\x20\x48\x8B\xF9\x48\x8B\xEA\x33\xC9\x4C\x63\xB7\x20\x21\x00\x00
</pre>
</td><td>
<pre>
48 89 6C 24 18 48 89 7C 24 20 41 56 48 83 EC 20 48 8B F9 48 8B EA 33 C9 4C 63 B7 20 21 00 00
</pre>
</td></tr></table>

### CGameEntitySystem::AllocPooledString

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF2\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x85\xF6
</pre>
</td><td>
<pre>
55 48 89 F2 48 89 E5 53 48 89 FB 48 83 EC ? 48 85 F6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\xD9\x48\x85\xD2
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B 05 ? ? ? ? 48 8B D9 48 85 D2
</pre>
</td></tr></table>

### CGameEntitySystem::FindByClassname

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

### CGameEntitySystem::FindByName

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
\x48\x81\xEC\x88\x00\x00\x00\x4D\x85\xC0
</pre>
</td><td>
<pre>
48 81 EC 88 00 00 00 4D 85 C0
</pre>
</td></tr></table>

### CGameEntitySystem::FindEntityByIndex

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x81\xFE\xFE\x7F\x00\x00\x77\x2A\x89\xF0
</pre>
</td><td>
<pre>
81 FE FE 7F 00 00 77 ? 89 F0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8D\x49\x10\x81\xFA\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
4C 8D 49 10 81 FA ? ? ? ?
</pre>
</td></tr></table>

### CGameEntitySystem::FindInSphere

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x83\xEC\x2A\xF3\x0F\x11\x45
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 D4 53 48 83 EC ? F3 0F 11 45
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x6C\x24\x2A\x56\x48\x83\xEC\x2A\x0F\x29\x74\x24
</pre>
</td><td>
<pre>
48 89 6C 24 ? 56 48 83 EC ? 0F 29 74 24
</pre>
</td></tr></table>

### CGameEntitySystem::GetSpawnOriginOffset

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x83\xBF\x2A\x2A\x2A\x2A\x2A\x48\x8D\x05
</pre>
</td><td>
<pre>
83 BF ? ? ? ? ? 48 8D 05
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x83\xB9\xF0\x0B\x00\x00\x2A\x48\x8D\x81\xA0\x1F\x00\x00
</pre>
</td><td>
<pre>
83 B9 F0 0B 00 00 ? 48 8D 81 A0 1F 00 00
</pre>
</td></tr></table>

### CGameEntitySystem::RemoveListenerEntity

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x08\x8B\xBF\x40\x21\x00\x00
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC 08 8B BF 40 21 00 00
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x20\x44\x8B\x91\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
40 53 48 83 EC 20 44 8B 91 ? ? ? ?
</pre>
</td></tr></table>

### CGameEntitySystem::SpawnEntityFromKeyValuesSync

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x56\x41\x55\x49\x89\xF5
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 56 41 55 49 89 F5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x55\x41\x56\x48\x8D\x68\x98\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x58\x08\x45\x33\xF6\x48\x89\x70\x10\x48\x8B\xF1
</pre>
</td><td>
<pre>
48 8B C4 55 41 56 48 8D 68 98 48 81 EC ? ? ? ? 48 89 58 08 45 33 F6 48 89 70 10 48 8B F1
</pre>
</td></tr></table>

### CGamePhysicsQueryInterface::EntitiesAlongRay

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x49\x89\xF2\x45\x89\xC3
</pre>
</td><td>
<pre>
55 49 89 F2 45 89 C3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x56\x41\x54\x41\x56\x48\x8D\xAC\x24
</pre>
</td><td>
<pre>
40 55 53 56 41 54 41 56 48 8D AC 24
</pre>
</td></tr></table>

### CGamePhysicsQueryInterface::TraceShape

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

### CGamePlayerEquip::InputTriggerForActivatedPlayer

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x10\x48\x8B\x1E
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 83 EC 10 48 8B 1E
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x18\x56\x48\x83\xEC\x2A\x48\x8B\x1A
</pre>
</td><td>
<pre>
48 89 5C 24 18 56 48 83 EC ? 48 8B 1A
</pre>
</td></tr></table>

### CGamePlayerEquip::InputTriggerForAllPlayers

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x10\x48\x8B\x1E
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 83 EC 10 48 8B 1E
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x53\x41\x54\x41\x56\x48\x8B\xEC
</pre>
</td><td>
<pre>
40 55 53 41 54 41 56 48 8B EC
</pre>
</td></tr></table>

### CNavMesh::GetNearestNavArea

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

### CNetworkGameServer::GetFreeClient

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
\x48\x89\x54\x24\x10\x53\x56\x57\x41\x56\x48\x83\xEC\x2A
</pre>
</td><td>
<pre>
48 89 54 24 10 53 56 57 41 56 48 83 EC ?
</pre>
</td></tr></table>

### CNetworkGameServer::PrintStatus

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xFE\x41\x55\x41\x54\x53
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 53
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x5C\x24\x20\x44\x89\x44\x24\x18\x89\x54\x24\x10
</pre>
</td><td>
<pre>
48 89 5C 24 20 44 89 44 24 18 89 54 24 10
</pre>
</td></tr></table>

### CNetworkGameServer::SpawnServer

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x85\xF6\x8B\x3D
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 81 EC ? ? ? ? 48 85 F6 8B 3D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x5C\x24\x20\x55\x56\x57\x41\x54\x41\x56\x48\x8D\x6C\x24\xC9
</pre>
</td><td>
<pre>
48 89 5C 24 20 55 56 57 41 54 41 56 48 8D 6C 24 C9
</pre>
</td></tr></table>

### CNetworkGameServer::SpawnServer_Unknown

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 81 EC
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x5C\x24\x18\x48\x89\x74\x24\x20\x55\x57\x41\x54\x41\x56\x41\x57\x48\x8B\xEC
</pre>
</td><td>
<pre>
48 89 5C 24 18 48 89 74 24 20 55 57 41 54 41 56 41 57 48 8B EC
</pre>
</td></tr></table>

### CPlayer_MovementServices::RunCommand

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x4C\x89\xEE
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 4C 89 EE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x48\x83\xEC\x2A\x0F\x29\x74\x24\x50
</pre>
</td><td>
<pre>
40 55 56 57 48 83 EC ? 0F 29 74 24 50
</pre>
</td></tr></table>

### CPointServerCommand::InputCommand

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xF3\x48\x83\xEC\x2A\x0F\xB6\x46\x18
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 F3 48 83 EC ? 0F B6 46 18
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x0F\xB6\x42\x18\x48\x8D\x72\x10\x33\xED
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 57 48 81 EC ? ? ? ? 0F B6 42 18 48 8D 72 10 33 ED
</pre>
</td></tr></table>

### CResourceNameTyped::ResolveResourceName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>resourcesystem</td><td>
<pre>
\x55\x48\x89\xF2
</pre>
</td><td>
<pre>
55 48 89 F2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>resourcesystem</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x8B\x41\x2A\x48\x8D\x79
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 8B 41 ? 48 8D 79
</pre>
</td></tr></table>

### CSoundEmitterSystem::EmitSound

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x07
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 81 EC ? ? ? ? 48 89 07
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\xDC\x4D\x89\x43\x18\x55
</pre>
</td><td>
<pre>
4C 8B DC 4D 89 43 18 55
</pre>
</td></tr></table>

### CSpawnGroupMgrGameSystem::GetSpawnGroups

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x49\x89\xF1\xBE\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 49 89 F1 BE ? ? ? ?
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

### CTriggerGravity::GravityTouch

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x48\x89\xF7\x53\x48\x89\xF3\xFF\x90
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 FC 48 89 F7 53 48 89 F3 FF 90
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

### FindWeaponVDataByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x31\xD2\x48\x89\xE5\x41\x56\x41\x55\x41\x54
</pre>
</td><td>
<pre>
55 31 D2 48 89 E5 41 56 41 55 41 54
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

### GameSystemFactory::m_FactoryList

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr></table>

### GetLegacyGameEventListener

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x16\x83\xFF\x3F
</pre>
</td><td>
<pre>
48 8B 05 ? ? ? ? 48 85 C0 74 16 83 FF 3F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\x15\x2A\x2A\x2A\x2A\x48\x85\xD2\x74\x2A\x83\xF9\x2A\x77\x2A\x48\x63\xC1\x48\xC1\xE0\x2A
</pre>
</td><td>
<pre>
48 8B 15 ? ? ? ? 48 85 D2 74 ? 83 F9 ? 77 ? 48 63 C1 48 C1 E0 ?
</pre>
</td></tr></table>

### HandleGCBanInfo

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
\x41\x54\x48\x81\xEC\x2A\x2A\x2A\x2A\xBA\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
41 54 48 81 EC ? ? ? ? BA ? ? ? ?
</pre>
</td></tr></table>

### HostSay

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x49\x89\xF7\x41\x56\x41\x55\x41\x54\x4D\x89\xC4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 49 89 F7 41 56 41 55 41 54 4D 89 C4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x89\x4C\x24\x20\x44\x88\x44\x24\x18
</pre>
</td><td>
<pre>
44 89 4C 24 20 44 88 44 24 18
</pre>
</td></tr></table>

### HostStateRequest

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x89\xF3\x48\x83\xEC\x2A\x48\x83\x7F\x2A\x2A\x74\x2A\x8B\x3D
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 89 F3 48 83 EC ? 48 83 7F ? ? 74 ? 8B 3D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x2A\x33\xF6\x48\x8B\xFA
</pre>
</td><td>
<pre>
48 89 74 24 10 57 48 83 EC ? 33 F6 48 8B FA
</pre>
</td></tr></table>

### INetChannel::SendNetMessage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>networksystem</td><td>
<pre>
\x55\x48\x8D\x87\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x41\x89\xD7
</pre>
</td><td>
<pre>
55 48 8D 87 ? ? ? ? 48 89 E5 41 57 41 89 D7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>networksystem</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x56\x48\x83\xEC\x2A\x41\x0F\xB6\xF0
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 74 24 18 48 89 7C 24 20 41 56 48 83 EC ? 41 0F B6 F0
</pre>
</td></tr></table>

### IScriptVM::CreateVM

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>vscript</td><td>
<pre>
\x55\x4C\x8D\x05\x2A\x2A\x2A\x2A
</pre>
</td><td>
<pre>
55 4C 8D 05 ? ? ? ?
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>vscript</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x41\x56\x48\x83\xEC\x2A\x48\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 48 89 7C 24 20 41 56 48 83 EC ? 48 8B D9
</pre>
</td></tr></table>

### KeyValues3::AddArrayElementToTail

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x53\x0F\xB7\x07\x48\x89\xFB\x66\xC1\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 53 0F B7 07 48 89 FB 66 C1 E8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x0F\xB6\x01
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 0F B6 01
</pre>
</td></tr></table>

### KeyValues3::AllocArray_Float32_Internal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x89\xF0\x44\x89\xCE\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xD5\x41\x54\x41\x89\xCC\x53\x48\x89\xFB\x48\x83\xEC\x2A\x44\x8B\x55\x2A\x44\x8B\x75\x2A\x0F\xB6\x55\x2A\x45\x89\xD7\x45\x84\xC0\x74\x2A\x83\xF8\x2A\x7F\x2A\x41\x89\xC6\x44\x89\xC7\x41\x83\xE6\x2A\x85\xC9\x0F\x85\x2A\x2A\x2A\x2A\x45\x84\xC9\x0F\x84\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\x89\xC1\x45\x31\xC9\x6A\x2A\x45\x31\xC0\x48\x89\xDF\x41\xC1\xE6\x2A\xE8\x2A\x2A\x2A\x2A\x0F\xB6\x43\x2A\x83\xE0\x2A\x44\x09\xF0\x88\x43\x2A\x58\x5A\x80\x23\x2A\x4C\x89\x6B\x2A\x48\x8D\x65\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x66\x0F\x1F\x44\x00\x2A\x83\xF8\x2A\x7F\x2A\x45\x84\xC9\x0F\x85\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\x89\xC1\x44\x89\x55\x2A\x45\x31\xC9\x6A\x2A\x45\x31\xC0\xBE\x2A\x2A\x2A\x2A\x48\x89\xDF\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x44\x8B\x55\x2A\x41\x0F\xB6\xCE\x48\x89\xDF\x8B\x75\x2A\x89\x4D\x2A\x41\x0F\xB6\xD2\xE8\x2A\x2A\x2A\x2A\x48\x8D\x7D\x2A\x48\x89\xDE\xE8\x2A\x2A\x2A\x2A\x48\x63\x55\x2A\x59\x48\x8B\x45\x2A\x5E\x85\xD2\x74\x2A\x48\x89\xC3\x4D\x89\xEE\x48\x8D\x04\xD0\x48\x89\x45\x2A\x48\x8B\x3B\x44\x89\xFE\x48\x83\xC3\x2A\x49\x83\xC6\x2A\x8B\x55\x2A\x48\x89\x7D\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x7D\x2A\x66\x0F\xEF\xC0
</pre>
</td><td>
<pre>
55 89 F0 44 89 CE 48 89 E5 41 57 41 56 41 55 49 89 D5 41 54 41 89 CC 53 48 89 FB 48 83 EC ? 44 8B 55 ? 44 8B 75 ? 0F B6 55 ? 45 89 D7 45 84 C0 74 ? 83 F8 ? 7F ? 41 89 C6 44 89 C7 41 83 E6 ? 85 C9 0F 85 ? ? ? ? 45 84 C9 0F 84 ? ? ? ? 48 83 EC ? 89 C1 45 31 C9 6A ? 45 31 C0 48 89 DF 41 C1 E6 ? E8 ? ? ? ? 0F B6 43 ? 83 E0 ? 44 09 F0 88 43 ? 58 5A 80 23 ? 4C 89 6B ? 48 8D 65 ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 66 0F 1F 44 00 ? 83 F8 ? 7F ? 45 84 C9 0F 85 ? ? ? ? 48 83 EC ? 89 C1 44 89 55 ? 45 31 C9 6A ? 45 31 C0 BE ? ? ? ? 48 89 DF 89 45 ? E8 ? ? ? ? 44 8B 55 ? 41 0F B6 CE 48 89 DF 8B 75 ? 89 4D ? 41 0F B6 D2 E8 ? ? ? ? 48 8D 7D ? 48 89 DE E8 ? ? ? ? 48 63 55 ? 59 48 8B 45 ? 5E 85 D2 74 ? 48 89 C3 4D 89 EE 48 8D 04 D0 48 89 45 ? 48 8B 3B 44 89 FE 48 83 C3 ? 49 83 C6 ? 8B 55 ? 48 89 7D ? E8 ? ? ? ? 48 8B 7D ? 66 0F EF C0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x89\x4C\x24\x2A\x4C\x89\x44\x24\x2A\x89\x54\x24\x2A\x53\x55\x56\x57\x41\x56\x48\x83\xEC\x2A\x0F\xB6\x84\x24\x2A\x2A\x2A\x2A\x45\x8B\xF1\x48\x63\xEA\x49\x8B\xD8\x0F\xB6\x94\x24\x2A\x2A\x2A\x2A\x48\x8B\xF9\x84\xC0\x0F\x84\x2A\x2A\x2A\x2A\x83\xFD\x2A\x0F\x8F\x2A\x2A\x2A\x2A\x45\x85\xC9\x75\x2A\x84\xD2\x0F\x85\x2A\x2A\x2A\x2A\x44\x0F\xB6\x84\x24\x2A\x2A\x2A\x2A\x33\xF6\xC6\x44\x24\x2A\x2A\x44\x8B\xCD\x89\x74\x24\x2A\x0F\xB6\xD0\x48\x89\x74\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\xBA\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x77\x2A\x48\x8B\xC5\x4C\x8D\x04\xAD\x2A\x2A\x2A\x2A\x48\xC1\xE0\x2A\x48\x8B\xC8\x48\x33\x0F\x48\x23\xCA\x48\x8B\xD3\x48\x33\xC8\x48\x83\xE1\x2A\x48\x89\x0F\x48\x8D\x4F\x2A\xE8\x2A\x2A\x2A\x2A\x41\x83\xFE\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\x8B\xCB\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xE9\x2A\x2A\x2A\x2A\x83\xFD\x2A\x0F\x8D\x2A\x2A\x2A\x2A\x84\xD2\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\x84\x24\x2A\x2A\x2A\x2A\x33\xF6\xC6\x44\x24\x2A\x2A\x44\x8B\xCD\x89\x74\x24\x2A\x48\x89\x74\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\xC5\x48\xBA\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC1\xE0\x2A\x48\x8B\xF5\x48\x8B\xC8\x48\x33\x0F\x48\x23\xCA\x48\x33\xC8\x48\x89\x0F\x45\x85\xF6\x75\x2A\x48\x83\xE1\x2A\x48\x89\x0F\x48\x89\x5F\x2A\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xC3\x41\x83\xFE\x2A\x75\x2A\x48\x83\xC9\x2A\x48\x89\x0F\x48\x89\x5F\x2A\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xC3\x48\xC7\xC1\x2A\x2A\x2A\x2A\xB8\x2A\x2A\x2A\x2A\x48\xF7\xE6\x48\x0F\x42\xC1\x48\x8B\xC8\xE8\x2A\x2A\x2A\x2A\x48\x8B\x94\x24\x2A\x2A\x2A\x2A\x4C\x8D\x04\xAD\x2A\x2A\x2A\x2A\x48\x8B\xC8\x48\x8B\xD8\xE8\x2A\x2A\x2A\x2A\x48\x83\x0F\x2A\x48\x89\x5F\x2A\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xC3\x48\x8B\x11\x33\xF6\x4C\x89\xA4\x24\x2A\x2A\x2A\x2A\x48\x8B\xC2\x44\x0F\xB6\xA4\x24\x2A\x2A\x2A\x2A\x48\xC1\xE8\x2A\x4C\x89\x6C\x24\x2A\x4C\x89\x7C\x24\x2A\x3C\x2A\x0F\x84\x2A\x2A\x2A\x2A\x0F\xB6\xC0\x83\xC0\x2A\x3D\x2A\x2A\x2A\x2A\x0F\x87\x2A\x2A\x2A\x2A\x4C\x8D\x05\x2A\x2A\x2A\x2A\x48\x98\x41\x0F\xB6\x84\x00\x2A\x2A\x2A\x2A\x41\x8B\x8C\x80\x2A\x2A\x2A\x2A\x49\x03\xC8\xFF\xE1\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x57\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x5F\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\x40\x38\x73\x2A\x74\x2A\x4C\x8B\x73\x2A\xEB\x2A\x4C\x8D\x73\x2A\x8B\xEE\x39\x73\x2A\x7E\x2A\x90\x49\x8B\x16\x48\x8B\xCF\xE8\x2A\x2A\x2A\x2A\xFF\xC5\x4D\x8D\x76\x2A\x3B\x6B\x2A\x7C\x2A\x48\x8B\x07\xA8\x2A\x75\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\xE9\x2A\x2A\x2A\x2A\xA8\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\xC1\xE8\x2A\x48\x8B\xCF\x0F\xB7\xC0\x48\x83\xC0\x2A\x48\xC1\xE0\x2A\x48\x2B\xC8\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x09\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x44\x8B\x81\x2A\x2A\x2A\x2A\x41\x8B\xD0\x81\xE2\x2A\x2A\x2A\x2A\x76\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\x81\x2A\x2A\x2A\x2A\x48\x3B\xD8\x72\x2A\x39\x33\x0F\x8C\x2A\x2A\x2A\x2A\x85\xD2\x74\x2A\x41\xF7\xC0\x2A\x2A\x2A\x2A\x74\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x8B\x91\x2A\x2A\x2A\x2A\xEB\x2A\x48\x8B\xD6\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\xC2\x48\x3B\xD8\x73\x2A\x40\x38\x73\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\xEB\x2A\x48\x8D\x81\x2A\x2A\x2A\x2A\x48\x8B\xD3\x4C\x8D\x89\x2A\x2A\x2A\x2A\x48\x89\x44\x24\x2A\x4C\x8D\x81\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\xEB\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\x4C\x8B\xC3\x48\x8B\x05\x2A\x2A\x2A\x2A\xB2\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x8B\xAC\x24\x2A\x2A\x2A\x2A\x48\x83\x27\x2A\x48\x8B\x9C\x24\x2A\x2A\x2A\x2A\x48\x81\x27\x2A\x2A\x2A\x2A\x45\x33\xC9\x48\x83\x0F\x2A\x45\x33\xC0\x8B\xD5\x48\x89\x77\x2A\x48\x8B\xCF\x40\x88\x74\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x17\x49\x8B\xCC\x48\x8B\xC2\x48\xC1\xE8\x2A\x0F\xB6\xC0\x4C\x3B\xE0\x74\x2A\x48\x81\xE2\x2A\x2A\x2A\x2A\x48\xC1\xE1\x2A\x48\x0B\xD1\x48\x89\x17\x48\x8B\xC2\x49\x8B\xCC\x48\xC1\xE8\x2A\x0F\xB6\xC0\x4C\x3B\xE0\x74\x2A\x48\x81\xE2\x2A\x2A\x2A\x2A\x48\xC1\xE1\x2A\x48\x0B\xD1\x48\x89\x17\x44\x0F\xB6\xA4\x24\x2A\x2A\x2A\x2A\x8B\xD5\x44\x0F\xB6\xAC\x24\x2A\x2A\x2A\x2A\x45\x0F\xB6\xCC\x45\x0F\xB6\xC5\x48\x8B\xCF\xE8\x2A\x2A\x2A\x2A\x48\x8B\xCF\xE8\x2A\x2A\x2A\x2A\x48\x8B\x2F\x48\x8B\xC5\x48\xC1\xE8\x2A\x3C\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\x8B\x47\x2A\x4C\x8D\x78\x2A\x40\x38\x70\x2A\x74\x2A\x4D\x8B\x3F\x8B\x68\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x57\x2A\x48\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x5F\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\xD3\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x5F\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\x45\x33\xC9\x4C\x8B\xC7\x33\xD2\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x8B\x07\xA8\x2A\x75\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\xE9\x2A\x2A\x2A\x2A\xA8\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\xC1\xE8\x2A\x48\x8B\xCF\x0F\xB7\xC0\x48\x83\xC0\x2A\x48\xC1\xE0\x2A\x48\x2B\xC8\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x09\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x44\x8B\x81\x2A\x2A\x2A\x2A\x41\x8B\xD0\x81\xE2\x2A\x2A\x2A\x2A\x76\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\x81\x2A\x2A\x2A\x2A\x48\x3B\xD8\x72\x2A\x39\x33\x7C\x2A\x85\xD2\x74\x2A\x41\xF7\xC0\x2A\x2A\x2A\x2A\x74\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x8B\x91\x2A\x2A\x2A\x2A\xEB\x2A\x48\x8B\xD6\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\xC2\x48\x3B\xD8\x73\x2A\x48\x8B\xD1\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8D\x81\x2A\x2A\x2A\x2A\x48\x8B\xD3\x4C\x8D\x89\x2A\x2A\x2A\x2A\x48\x89\x44\x24\x2A\x4C\x8D\x81\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\x4C\x8B\xC3\x48\x8B\x05\x2A\x2A\x2A\x2A\xB2\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\xF6\xC2\x2A\x74\x2A\x48\x8B\x4F\x2A\xE8\x2A\x2A\x2A\x2A\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x77\x2A\x48\x21\x07\xE9\x2A\x2A\x2A\x2A\x24\x2A\x4C\x8B\xFE\x3C\x2A\x75\x2A\x48\xC1\xED\x2A\x83\xE5\x2A\xEB\x2A\x8B\xEE\x8B\xFE\x4C\x8B\xF3\x3B\xFD\x74\x2A\x48\x63\xC7\x45\x33\xC9\x40\x88\x74\x24\x2A\x45\x0F\xB6\xC4\x89\x74\x24\x2A\x41\x0F\xB6\xD5\x48\x89\x74\x24\x2A\x49\x8B\x1C\xC7\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\xF3\x41\x0F\x10\x06
</pre>
</td><td>
<pre>
44 89 4C 24 ? 4C 89 44 24 ? 89 54 24 ? 53 55 56 57 41 56 48 83 EC ? 0F B6 84 24 ? ? ? ? 45 8B F1 48 63 EA 49 8B D8 0F B6 94 24 ? ? ? ? 48 8B F9 84 C0 0F 84 ? ? ? ? 83 FD ? 0F 8F ? ? ? ? 45 85 C9 75 ? 84 D2 0F 85 ? ? ? ? 44 0F B6 84 24 ? ? ? ? 33 F6 C6 44 24 ? ? 44 8B CD 89 74 24 ? 0F B6 D0 48 89 74 24 ? E8 ? ? ? ? 48 BA ? ? ? ? ? ? ? ? 48 89 77 ? 48 8B C5 4C 8D 04 AD ? ? ? ? 48 C1 E0 ? 48 8B C8 48 33 0F 48 23 CA 48 8B D3 48 33 C8 48 83 E1 ? 48 89 0F 48 8D 4F ? E8 ? ? ? ? 41 83 FE ? 0F 85 ? ? ? ? 48 8B CB 48 83 C4 ? 41 5E 5F 5E 5D 5B E9 ? ? ? ? 83 FD ? 0F 8D ? ? ? ? 84 D2 0F 84 ? ? ? ? 44 0F B6 84 24 ? ? ? ? 33 F6 C6 44 24 ? ? 44 8B CD 89 74 24 ? 48 89 74 24 ? E8 ? ? ? ? 48 8B C5 48 BA ? ? ? ? ? ? ? ? 48 C1 E0 ? 48 8B F5 48 8B C8 48 33 0F 48 23 CA 48 33 C8 48 89 0F 45 85 F6 75 ? 48 83 E1 ? 48 89 0F 48 89 5F ? 48 83 C4 ? 41 5E 5F 5E 5D 5B C3 41 83 FE ? 75 ? 48 83 C9 ? 48 89 0F 48 89 5F ? 48 83 C4 ? 41 5E 5F 5E 5D 5B C3 48 C7 C1 ? ? ? ? B8 ? ? ? ? 48 F7 E6 48 0F 42 C1 48 8B C8 E8 ? ? ? ? 48 8B 94 24 ? ? ? ? 4C 8D 04 AD ? ? ? ? 48 8B C8 48 8B D8 E8 ? ? ? ? 48 83 0F ? 48 89 5F ? 48 83 C4 ? 41 5E 5F 5E 5D 5B C3 48 8B 11 33 F6 4C 89 A4 24 ? ? ? ? 48 8B C2 44 0F B6 A4 24 ? ? ? ? 48 C1 E8 ? 4C 89 6C 24 ? 4C 89 7C 24 ? 3C ? 0F 84 ? ? ? ? 0F B6 C0 83 C0 ? 3D ? ? ? ? 0F 87 ? ? ? ? 4C 8D 05 ? ? ? ? 48 98 41 0F B6 84 00 ? ? ? ? 41 8B 8C 80 ? ? ? ? 49 03 C8 FF E1 48 8B 05 ? ? ? ? 48 8B 57 ? 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? 48 8B 5F ? 48 85 DB 0F 84 ? ? ? ? 40 38 73 ? 74 ? 4C 8B 73 ? EB ? 4C 8D 73 ? 8B EE 39 73 ? 7E ? 90 49 8B 16 48 8B CF E8 ? ? ? ? FF C5 4D 8D 76 ? 3B 6B ? 7C ? 48 8B 07 A8 ? 75 ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? E9 ? ? ? ? A8 ? 0F 85 ? ? ? ? 48 C1 E8 ? 48 8B CF 0F B7 C0 48 83 C0 ? 48 C1 E0 ? 48 2B C8 0F 84 ? ? ? ? 48 8B 09 48 85 C9 0F 84 ? ? ? ? 44 8B 81 ? ? ? ? 41 8B D0 81 E2 ? ? ? ? 76 ? 48 3B 99 ? ? ? ? 72 ? 48 63 81 ? ? ? ? 48 03 81 ? ? ? ? 48 3B D8 72 ? 39 33 0F 8C ? ? ? ? 85 D2 74 ? 41 F7 C0 ? ? ? ? 74 ? 48 3B 99 ? ? ? ? 72 ? 48 8B 91 ? ? ? ? EB ? 48 8B D6 48 63 81 ? ? ? ? 48 03 C2 48 3B D8 73 ? 40 38 73 ? 0F 84 ? ? ? ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? EB ? 48 8D 81 ? ? ? ? 48 8B D3 4C 8D 89 ? ? ? ? 48 89 44 24 ? 4C 8D 81 ? ? ? ? E8 ? ? ? ? EB ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? 4C 8B C3 48 8B 05 ? ? ? ? B2 ? 48 8B 08 48 8B 01 FF 50 ? 8B AC 24 ? ? ? ? 48 83 27 ? 48 8B 9C 24 ? ? ? ? 48 81 27 ? ? ? ? 45 33 C9 48 83 0F ? 45 33 C0 8B D5 48 89 77 ? 48 8B CF 40 88 74 24 ? E8 ? ? ? ? 48 8B 17 49 8B CC 48 8B C2 48 C1 E8 ? 0F B6 C0 4C 3B E0 74 ? 48 81 E2 ? ? ? ? 48 C1 E1 ? 48 0B D1 48 89 17 48 8B C2 49 8B CC 48 C1 E8 ? 0F B6 C0 4C 3B E0 74 ? 48 81 E2 ? ? ? ? 48 C1 E1 ? 48 0B D1 48 89 17 44 0F B6 A4 24 ? ? ? ? 8B D5 44 0F B6 AC 24 ? ? ? ? 45 0F B6 CC 45 0F B6 C5 48 8B CF E8 ? ? ? ? 48 8B CF E8 ? ? ? ? 48 8B 2F 48 8B C5 48 C1 E8 ? 3C ? 0F 85 ? ? ? ? 48 8B 47 ? 4C 8D 78 ? 40 38 70 ? 74 ? 4D 8B 3F 8B 68 ? E9 ? ? ? ? 48 8B 57 ? 48 85 D2 0F 84 ? ? ? ? 48 8B 05 ? ? ? ? 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? 48 8B 5F ? 48 85 DB 0F 84 ? ? ? ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 48 8B 05 ? ? ? ? 48 8B D3 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? 48 8B 5F ? 48 85 DB 0F 84 ? ? ? ? 45 33 C9 4C 8B C7 33 D2 48 8B CB E8 ? ? ? ? 48 8B 07 A8 ? 75 ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? E9 ? ? ? ? A8 ? 0F 85 ? ? ? ? 48 C1 E8 ? 48 8B CF 0F B7 C0 48 83 C0 ? 48 C1 E0 ? 48 2B C8 0F 84 ? ? ? ? 48 8B 09 48 85 C9 0F 84 ? ? ? ? 44 8B 81 ? ? ? ? 41 8B D0 81 E2 ? ? ? ? 76 ? 48 3B 99 ? ? ? ? 72 ? 48 63 81 ? ? ? ? 48 03 81 ? ? ? ? 48 3B D8 72 ? 39 33 7C ? 85 D2 74 ? 41 F7 C0 ? ? ? ? 74 ? 48 3B 99 ? ? ? ? 72 ? 48 8B 91 ? ? ? ? EB ? 48 8B D6 48 63 81 ? ? ? ? 48 03 C2 48 3B D8 73 ? 48 8B D1 48 8B CB E8 ? ? ? ? E9 ? ? ? ? 48 8D 81 ? ? ? ? 48 8B D3 4C 8D 89 ? ? ? ? 48 89 44 24 ? 4C 8D 81 ? ? ? ? E8 ? ? ? ? E9 ? ? ? ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? 4C 8B C3 48 8B 05 ? ? ? ? B2 ? 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? F6 C2 ? 74 ? 48 8B 4F ? E8 ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 48 89 77 ? 48 21 07 E9 ? ? ? ? 24 ? 4C 8B FE 3C ? 75 ? 48 C1 ED ? 83 E5 ? EB ? 8B EE 8B FE 4C 8B F3 3B FD 74 ? 48 63 C7 45 33 C9 40 88 74 24 ? 45 0F B6 C4 89 74 24 ? 41 0F B6 D5 48 89 74 24 ? 49 8B 1C C7 48 8B CB E8 ? ? ? ? F3 41 0F 10 06
</pre>
</td></tr></table>

### KeyValues3::AllocArray_Int32_Internal

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x89\xF0\x44\x89\xCE\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xD5\x41\x54\x41\x89\xCC\x53\x48\x89\xFB\x48\x83\xEC\x2A\x44\x8B\x55\x2A\x44\x8B\x75\x2A\x0F\xB6\x55\x2A\x45\x89\xD7\x45\x84\xC0\x74\x2A\x83\xF8\x2A\x7F\x2A\x41\x89\xC6\x44\x89\xC7\x41\x83\xE6\x2A\x85\xC9\x0F\x85\x2A\x2A\x2A\x2A\x45\x84\xC9\x0F\x84\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\x89\xC1\x45\x31\xC9\x6A\x2A\x45\x31\xC0\x48\x89\xDF\x41\xC1\xE6\x2A\xE8\x2A\x2A\x2A\x2A\x0F\xB6\x43\x2A\x83\xE0\x2A\x44\x09\xF0\x88\x43\x2A\x58\x5A\x80\x23\x2A\x4C\x89\x6B\x2A\x48\x8D\x65\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x66\x0F\x1F\x44\x00\x2A\x83\xF8\x2A\x7F\x2A\x45\x84\xC9\x0F\x85\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\x89\xC1\x44\x89\x55\x2A\x45\x31\xC9\x6A\x2A\x45\x31\xC0\xBE\x2A\x2A\x2A\x2A\x48\x89\xDF\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x44\x8B\x55\x2A\x41\x0F\xB6\xCE\x48\x89\xDF\x8B\x75\x2A\x89\x4D\x2A\x41\x0F\xB6\xD2\xE8\x2A\x2A\x2A\x2A\x48\x8D\x7D\x2A\x48\x89\xDE\xE8\x2A\x2A\x2A\x2A\x48\x63\x55\x2A\x59\x48\x8B\x45\x2A\x5E\x85\xD2\x74\x2A\x48\x89\xC3\x4D\x89\xEE\x48\x8D\x04\xD0\x48\x89\x45\x2A\x48\x8B\x3B\x44\x89\xFE\x48\x83\xC3\x2A\x49\x83\xC6\x2A\x8B\x55\x2A\x48\x89\x7D\x2A\xE8\x2A\x2A\x2A\x2A\x49\x63\x56
</pre>
</td><td>
<pre>
55 89 F0 44 89 CE 48 89 E5 41 57 41 56 41 55 49 89 D5 41 54 41 89 CC 53 48 89 FB 48 83 EC ? 44 8B 55 ? 44 8B 75 ? 0F B6 55 ? 45 89 D7 45 84 C0 74 ? 83 F8 ? 7F ? 41 89 C6 44 89 C7 41 83 E6 ? 85 C9 0F 85 ? ? ? ? 45 84 C9 0F 84 ? ? ? ? 48 83 EC ? 89 C1 45 31 C9 6A ? 45 31 C0 48 89 DF 41 C1 E6 ? E8 ? ? ? ? 0F B6 43 ? 83 E0 ? 44 09 F0 88 43 ? 58 5A 80 23 ? 4C 89 6B ? 48 8D 65 ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 66 0F 1F 44 00 ? 83 F8 ? 7F ? 45 84 C9 0F 85 ? ? ? ? 48 83 EC ? 89 C1 44 89 55 ? 45 31 C9 6A ? 45 31 C0 BE ? ? ? ? 48 89 DF 89 45 ? E8 ? ? ? ? 44 8B 55 ? 41 0F B6 CE 48 89 DF 8B 75 ? 89 4D ? 41 0F B6 D2 E8 ? ? ? ? 48 8D 7D ? 48 89 DE E8 ? ? ? ? 48 63 55 ? 59 48 8B 45 ? 5E 85 D2 74 ? 48 89 C3 4D 89 EE 48 8D 04 D0 48 89 45 ? 48 8B 3B 44 89 FE 48 83 C3 ? 49 83 C6 ? 8B 55 ? 48 89 7D ? E8 ? ? ? ? 49 63 56
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x89\x4C\x24\x2A\x4C\x89\x44\x24\x2A\x89\x54\x24\x2A\x53\x55\x56\x57\x41\x56\x48\x83\xEC\x2A\x0F\xB6\x84\x24\x2A\x2A\x2A\x2A\x45\x8B\xF1\x48\x63\xEA\x49\x8B\xD8\x0F\xB6\x94\x24\x2A\x2A\x2A\x2A\x48\x8B\xF9\x84\xC0\x0F\x84\x2A\x2A\x2A\x2A\x83\xFD\x2A\x0F\x8F\x2A\x2A\x2A\x2A\x45\x85\xC9\x75\x2A\x84\xD2\x0F\x85\x2A\x2A\x2A\x2A\x44\x0F\xB6\x84\x24\x2A\x2A\x2A\x2A\x33\xF6\xC6\x44\x24\x2A\x2A\x44\x8B\xCD\x89\x74\x24\x2A\x0F\xB6\xD0\x48\x89\x74\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\xBA\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x77\x2A\x48\x8B\xC5\x4C\x8D\x04\xAD\x2A\x2A\x2A\x2A\x48\xC1\xE0\x2A\x48\x8B\xC8\x48\x33\x0F\x48\x23\xCA\x48\x8B\xD3\x48\x33\xC8\x48\x83\xE1\x2A\x48\x89\x0F\x48\x8D\x4F\x2A\xE8\x2A\x2A\x2A\x2A\x41\x83\xFE\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\x8B\xCB\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xE9\x2A\x2A\x2A\x2A\x83\xFD\x2A\x0F\x8D\x2A\x2A\x2A\x2A\x84\xD2\x0F\x84\x2A\x2A\x2A\x2A\x44\x0F\xB6\x84\x24\x2A\x2A\x2A\x2A\x33\xF6\xC6\x44\x24\x2A\x2A\x44\x8B\xCD\x89\x74\x24\x2A\x48\x89\x74\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\xC5\x48\xBA\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\xC1\xE0\x2A\x48\x8B\xF5\x48\x8B\xC8\x48\x33\x0F\x48\x23\xCA\x48\x33\xC8\x48\x89\x0F\x45\x85\xF6\x75\x2A\x48\x83\xE1\x2A\x48\x89\x0F\x48\x89\x5F\x2A\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xC3\x41\x83\xFE\x2A\x75\x2A\x48\x83\xC9\x2A\x48\x89\x0F\x48\x89\x5F\x2A\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xC3\x48\xC7\xC1\x2A\x2A\x2A\x2A\xB8\x2A\x2A\x2A\x2A\x48\xF7\xE6\x48\x0F\x42\xC1\x48\x8B\xC8\xE8\x2A\x2A\x2A\x2A\x48\x8B\x94\x24\x2A\x2A\x2A\x2A\x4C\x8D\x04\xAD\x2A\x2A\x2A\x2A\x48\x8B\xC8\x48\x8B\xD8\xE8\x2A\x2A\x2A\x2A\x48\x83\x0F\x2A\x48\x89\x5F\x2A\x48\x83\xC4\x2A\x41\x5E\x5F\x5E\x5D\x5B\xC3\x48\x8B\x11\x33\xF6\x4C\x89\xA4\x24\x2A\x2A\x2A\x2A\x48\x8B\xC2\x44\x0F\xB6\xA4\x24\x2A\x2A\x2A\x2A\x48\xC1\xE8\x2A\x4C\x89\x6C\x24\x2A\x4C\x89\x7C\x24\x2A\x3C\x2A\x0F\x84\x2A\x2A\x2A\x2A\x0F\xB6\xC0\x83\xC0\x2A\x3D\x2A\x2A\x2A\x2A\x0F\x87\x2A\x2A\x2A\x2A\x4C\x8D\x05\x2A\x2A\x2A\x2A\x48\x98\x41\x0F\xB6\x84\x00\x2A\x2A\x2A\x2A\x41\x8B\x8C\x80\x2A\x2A\x2A\x2A\x49\x03\xC8\xFF\xE1\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x57\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x5F\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\x40\x38\x73\x2A\x74\x2A\x4C\x8B\x73\x2A\xEB\x2A\x4C\x8D\x73\x2A\x8B\xEE\x39\x73\x2A\x7E\x2A\x90\x49\x8B\x16\x48\x8B\xCF\xE8\x2A\x2A\x2A\x2A\xFF\xC5\x4D\x8D\x76\x2A\x3B\x6B\x2A\x7C\x2A\x48\x8B\x07\xA8\x2A\x75\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\xE9\x2A\x2A\x2A\x2A\xA8\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\xC1\xE8\x2A\x48\x8B\xCF\x0F\xB7\xC0\x48\x83\xC0\x2A\x48\xC1\xE0\x2A\x48\x2B\xC8\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x09\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x44\x8B\x81\x2A\x2A\x2A\x2A\x41\x8B\xD0\x81\xE2\x2A\x2A\x2A\x2A\x76\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\x81\x2A\x2A\x2A\x2A\x48\x3B\xD8\x72\x2A\x39\x33\x0F\x8C\x2A\x2A\x2A\x2A\x85\xD2\x74\x2A\x41\xF7\xC0\x2A\x2A\x2A\x2A\x74\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x8B\x91\x2A\x2A\x2A\x2A\xEB\x2A\x48\x8B\xD6\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\xC2\x48\x3B\xD8\x73\x2A\x40\x38\x73\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\xEB\x2A\x48\x8D\x81\x2A\x2A\x2A\x2A\x48\x8B\xD3\x4C\x8D\x89\x2A\x2A\x2A\x2A\x48\x89\x44\x24\x2A\x4C\x8D\x81\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\xEB\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\x4C\x8B\xC3\x48\x8B\x05\x2A\x2A\x2A\x2A\xB2\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x8B\xAC\x24\x2A\x2A\x2A\x2A\x48\x83\x27\x2A\x48\x8B\x9C\x24\x2A\x2A\x2A\x2A\x48\x81\x27\x2A\x2A\x2A\x2A\x45\x33\xC9\x48\x83\x0F\x2A\x45\x33\xC0\x8B\xD5\x48\x89\x77\x2A\x48\x8B\xCF\x40\x88\x74\x24\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x17\x49\x8B\xCC\x48\x8B\xC2\x48\xC1\xE8\x2A\x0F\xB6\xC0\x4C\x3B\xE0\x74\x2A\x48\x81\xE2\x2A\x2A\x2A\x2A\x48\xC1\xE1\x2A\x48\x0B\xD1\x48\x89\x17\x48\x8B\xC2\x49\x8B\xCC\x48\xC1\xE8\x2A\x0F\xB6\xC0\x4C\x3B\xE0\x74\x2A\x48\x81\xE2\x2A\x2A\x2A\x2A\x48\xC1\xE1\x2A\x48\x0B\xD1\x48\x89\x17\x44\x0F\xB6\xA4\x24\x2A\x2A\x2A\x2A\x8B\xD5\x44\x0F\xB6\xAC\x24\x2A\x2A\x2A\x2A\x45\x0F\xB6\xCC\x45\x0F\xB6\xC5\x48\x8B\xCF\xE8\x2A\x2A\x2A\x2A\x48\x8B\xCF\xE8\x2A\x2A\x2A\x2A\x48\x8B\x2F\x48\x8B\xC5\x48\xC1\xE8\x2A\x3C\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\x8B\x47\x2A\x4C\x8D\x78\x2A\x40\x38\x70\x2A\x74\x2A\x4D\x8B\x3F\x8B\x68\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x57\x2A\x48\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x5F\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\xD3\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8B\x5F\x2A\x48\x85\xDB\x0F\x84\x2A\x2A\x2A\x2A\x45\x33\xC9\x4C\x8B\xC7\x33\xD2\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x48\x8B\x07\xA8\x2A\x75\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\xE9\x2A\x2A\x2A\x2A\xA8\x2A\x0F\x85\x2A\x2A\x2A\x2A\x48\xC1\xE8\x2A\x48\x8B\xCF\x0F\xB7\xC0\x48\x83\xC0\x2A\x48\xC1\xE0\x2A\x48\x2B\xC8\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x09\x48\x85\xC9\x0F\x84\x2A\x2A\x2A\x2A\x44\x8B\x81\x2A\x2A\x2A\x2A\x41\x8B\xD0\x81\xE2\x2A\x2A\x2A\x2A\x76\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\x81\x2A\x2A\x2A\x2A\x48\x3B\xD8\x72\x2A\x39\x33\x7C\x2A\x85\xD2\x74\x2A\x41\xF7\xC0\x2A\x2A\x2A\x2A\x74\x2A\x48\x3B\x99\x2A\x2A\x2A\x2A\x72\x2A\x48\x8B\x91\x2A\x2A\x2A\x2A\xEB\x2A\x48\x8B\xD6\x48\x63\x81\x2A\x2A\x2A\x2A\x48\x03\xC2\x48\x3B\xD8\x73\x2A\x48\x8B\xD1\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\x48\x8D\x81\x2A\x2A\x2A\x2A\x48\x8B\xD3\x4C\x8D\x89\x2A\x2A\x2A\x2A\x48\x89\x44\x24\x2A\x4C\x8D\x81\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\x40\x38\x73\x2A\x74\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x53\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\x0F\xB6\x43\x2A\x89\x43\x2A\x40\x88\x73\x2A\x89\x73\x2A\x4C\x8B\xC3\x48\x8B\x05\x2A\x2A\x2A\x2A\xB2\x2A\x48\x8B\x08\x48\x8B\x01\xFF\x50\x2A\xE9\x2A\x2A\x2A\x2A\xF6\xC2\x2A\x74\x2A\x48\x8B\x4F\x2A\xE8\x2A\x2A\x2A\x2A\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x48\x89\x77\x2A\x48\x21\x07\xE9\x2A\x2A\x2A\x2A\x24\x2A\x4C\x8B\xFE\x3C\x2A\x75\x2A\x48\xC1\xED\x2A\x83\xE5\x2A\xEB\x2A\x8B\xEE\x8B\xFE\x4C\x8B\xF3\x3B\xFD\x74\x2A\x48\x63\xC7\x45\x33\xC9\x40\x88\x74\x24\x2A\x45\x0F\xB6\xC4\x89\x74\x24\x2A\x41\x0F\xB6\xD5\x48\x89\x74\x24\x2A\x49\x8B\x1C\xC7\x48\x8B\xCB\xE8\x2A\x2A\x2A\x2A\x49\x63\x06
</pre>
</td><td>
<pre>
44 89 4C 24 ? 4C 89 44 24 ? 89 54 24 ? 53 55 56 57 41 56 48 83 EC ? 0F B6 84 24 ? ? ? ? 45 8B F1 48 63 EA 49 8B D8 0F B6 94 24 ? ? ? ? 48 8B F9 84 C0 0F 84 ? ? ? ? 83 FD ? 0F 8F ? ? ? ? 45 85 C9 75 ? 84 D2 0F 85 ? ? ? ? 44 0F B6 84 24 ? ? ? ? 33 F6 C6 44 24 ? ? 44 8B CD 89 74 24 ? 0F B6 D0 48 89 74 24 ? E8 ? ? ? ? 48 BA ? ? ? ? ? ? ? ? 48 89 77 ? 48 8B C5 4C 8D 04 AD ? ? ? ? 48 C1 E0 ? 48 8B C8 48 33 0F 48 23 CA 48 8B D3 48 33 C8 48 83 E1 ? 48 89 0F 48 8D 4F ? E8 ? ? ? ? 41 83 FE ? 0F 85 ? ? ? ? 48 8B CB 48 83 C4 ? 41 5E 5F 5E 5D 5B E9 ? ? ? ? 83 FD ? 0F 8D ? ? ? ? 84 D2 0F 84 ? ? ? ? 44 0F B6 84 24 ? ? ? ? 33 F6 C6 44 24 ? ? 44 8B CD 89 74 24 ? 48 89 74 24 ? E8 ? ? ? ? 48 8B C5 48 BA ? ? ? ? ? ? ? ? 48 C1 E0 ? 48 8B F5 48 8B C8 48 33 0F 48 23 CA 48 33 C8 48 89 0F 45 85 F6 75 ? 48 83 E1 ? 48 89 0F 48 89 5F ? 48 83 C4 ? 41 5E 5F 5E 5D 5B C3 41 83 FE ? 75 ? 48 83 C9 ? 48 89 0F 48 89 5F ? 48 83 C4 ? 41 5E 5F 5E 5D 5B C3 48 C7 C1 ? ? ? ? B8 ? ? ? ? 48 F7 E6 48 0F 42 C1 48 8B C8 E8 ? ? ? ? 48 8B 94 24 ? ? ? ? 4C 8D 04 AD ? ? ? ? 48 8B C8 48 8B D8 E8 ? ? ? ? 48 83 0F ? 48 89 5F ? 48 83 C4 ? 41 5E 5F 5E 5D 5B C3 48 8B 11 33 F6 4C 89 A4 24 ? ? ? ? 48 8B C2 44 0F B6 A4 24 ? ? ? ? 48 C1 E8 ? 4C 89 6C 24 ? 4C 89 7C 24 ? 3C ? 0F 84 ? ? ? ? 0F B6 C0 83 C0 ? 3D ? ? ? ? 0F 87 ? ? ? ? 4C 8D 05 ? ? ? ? 48 98 41 0F B6 84 00 ? ? ? ? 41 8B 8C 80 ? ? ? ? 49 03 C8 FF E1 48 8B 05 ? ? ? ? 48 8B 57 ? 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? 48 8B 5F ? 48 85 DB 0F 84 ? ? ? ? 40 38 73 ? 74 ? 4C 8B 73 ? EB ? 4C 8D 73 ? 8B EE 39 73 ? 7E ? 90 49 8B 16 48 8B CF E8 ? ? ? ? FF C5 4D 8D 76 ? 3B 6B ? 7C ? 48 8B 07 A8 ? 75 ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? E9 ? ? ? ? A8 ? 0F 85 ? ? ? ? 48 C1 E8 ? 48 8B CF 0F B7 C0 48 83 C0 ? 48 C1 E0 ? 48 2B C8 0F 84 ? ? ? ? 48 8B 09 48 85 C9 0F 84 ? ? ? ? 44 8B 81 ? ? ? ? 41 8B D0 81 E2 ? ? ? ? 76 ? 48 3B 99 ? ? ? ? 72 ? 48 63 81 ? ? ? ? 48 03 81 ? ? ? ? 48 3B D8 72 ? 39 33 0F 8C ? ? ? ? 85 D2 74 ? 41 F7 C0 ? ? ? ? 74 ? 48 3B 99 ? ? ? ? 72 ? 48 8B 91 ? ? ? ? EB ? 48 8B D6 48 63 81 ? ? ? ? 48 03 C2 48 3B D8 73 ? 40 38 73 ? 0F 84 ? ? ? ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? EB ? 48 8D 81 ? ? ? ? 48 8B D3 4C 8D 89 ? ? ? ? 48 89 44 24 ? 4C 8D 81 ? ? ? ? E8 ? ? ? ? EB ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? 4C 8B C3 48 8B 05 ? ? ? ? B2 ? 48 8B 08 48 8B 01 FF 50 ? 8B AC 24 ? ? ? ? 48 83 27 ? 48 8B 9C 24 ? ? ? ? 48 81 27 ? ? ? ? 45 33 C9 48 83 0F ? 45 33 C0 8B D5 48 89 77 ? 48 8B CF 40 88 74 24 ? E8 ? ? ? ? 48 8B 17 49 8B CC 48 8B C2 48 C1 E8 ? 0F B6 C0 4C 3B E0 74 ? 48 81 E2 ? ? ? ? 48 C1 E1 ? 48 0B D1 48 89 17 48 8B C2 49 8B CC 48 C1 E8 ? 0F B6 C0 4C 3B E0 74 ? 48 81 E2 ? ? ? ? 48 C1 E1 ? 48 0B D1 48 89 17 44 0F B6 A4 24 ? ? ? ? 8B D5 44 0F B6 AC 24 ? ? ? ? 45 0F B6 CC 45 0F B6 C5 48 8B CF E8 ? ? ? ? 48 8B CF E8 ? ? ? ? 48 8B 2F 48 8B C5 48 C1 E8 ? 3C ? 0F 85 ? ? ? ? 48 8B 47 ? 4C 8D 78 ? 40 38 70 ? 74 ? 4D 8B 3F 8B 68 ? E9 ? ? ? ? 48 8B 57 ? 48 85 D2 0F 84 ? ? ? ? 48 8B 05 ? ? ? ? 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? 48 8B 5F ? 48 85 DB 0F 84 ? ? ? ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 48 8B 05 ? ? ? ? 48 8B D3 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? 48 8B 5F ? 48 85 DB 0F 84 ? ? ? ? 45 33 C9 4C 8B C7 33 D2 48 8B CB E8 ? ? ? ? 48 8B 07 A8 ? 75 ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? E9 ? ? ? ? A8 ? 0F 85 ? ? ? ? 48 C1 E8 ? 48 8B CF 0F B7 C0 48 83 C0 ? 48 C1 E0 ? 48 2B C8 0F 84 ? ? ? ? 48 8B 09 48 85 C9 0F 84 ? ? ? ? 44 8B 81 ? ? ? ? 41 8B D0 81 E2 ? ? ? ? 76 ? 48 3B 99 ? ? ? ? 72 ? 48 63 81 ? ? ? ? 48 03 81 ? ? ? ? 48 3B D8 72 ? 39 33 7C ? 85 D2 74 ? 41 F7 C0 ? ? ? ? 74 ? 48 3B 99 ? ? ? ? 72 ? 48 8B 91 ? ? ? ? EB ? 48 8B D6 48 63 81 ? ? ? ? 48 03 C2 48 3B D8 73 ? 48 8B D1 48 8B CB E8 ? ? ? ? E9 ? ? ? ? 48 8D 81 ? ? ? ? 48 8B D3 4C 8D 89 ? ? ? ? 48 89 44 24 ? 4C 8D 81 ? ? ? ? E8 ? ? ? ? E9 ? ? ? ? 40 38 73 ? 74 ? 48 8B 05 ? ? ? ? 48 8B 53 ? 48 8B 08 48 8B 01 FF 50 ? 0F B6 43 ? 89 43 ? 40 88 73 ? 89 73 ? 4C 8B C3 48 8B 05 ? ? ? ? B2 ? 48 8B 08 48 8B 01 FF 50 ? E9 ? ? ? ? F6 C2 ? 74 ? 48 8B 4F ? E8 ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 48 89 77 ? 48 21 07 E9 ? ? ? ? 24 ? 4C 8B FE 3C ? 75 ? 48 C1 ED ? 83 E5 ? EB ? 8B EE 8B FE 4C 8B F3 3B FD 74 ? 48 63 C7 45 33 C9 40 88 74 24 ? 45 0F B6 C4 89 74 24 ? 41 0F B6 D5 48 89 74 24 ? 49 8B 1C C7 48 8B CB E8 ? ? ? ? 49 63 06
</pre>
</td></tr></table>

### KeyValues3::FindMember

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xCC\x53\x48\x83\xEC\x2A\x0F\xB7\x0F\x66\xC1\xE9\x2A\x83\xE1\x2A\x80\xF9\x2A\x74\x2A\x48\x83\xC4\x2A\x4C\x89\xE0\x5B\x41\x5C\x5D\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x48\x8B\x46
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 CC 53 48 83 EC ? 0F B7 0F 66 C1 E9 ? 83 E1 ? 80 F9 ? 74 ? 48 83 C4 ? 4C 89 E0 5B 41 5C 5D C3 0F 1F 80 ? ? ? ? 48 8B 46
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x57\x48\x83\xEC\x2A\x4C\x8B\x52\x08
</pre>
</td><td>
<pre>
48 89 5C 24 08 57 48 83 EC ? 4C 8B 52 08
</pre>
</td></tr></table>

### KeyValues3::FindOrCreateMember

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xD5\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x0F\xB7\x07
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 D5 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 0F B7 07
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x56\x57\x41\x54\x41\x56\x41\x57\x48\x83\xEC\x2A\x0F\xB6\x01\x33\xDB\xC0\xE8\x2A
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 56 57 41 54 41 56 41 57 48 83 EC ? 0F B6 01 33 DB C0 E8 ?
</pre>
</td></tr></table>

### KeyValues3::GetArrayElement

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x49\x89\xFC\x53\x48\x63\xDE
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 49 89 FC 53 48 63 DE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x63\xDA\x48\x8B\xF9\xE8
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 63 DA 48 8B F9 E8
</pre>
</td></tr></table>

### KeyValues3::GetArrayElementCount

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\xB7\x17\x31\xC0\x66\xC1\xEA\x2A\x89\xD1\x83\xE1\x2A\x80\xF9\x2A\x75\x2A\x80\xFA
</pre>
</td><td>
<pre>
0F B7 17 31 C0 66 C1 EA ? 89 D1 83 E1 ? 80 F9 ? 75 ? 80 FA
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\x01\x4C\x8B\xC0\x49\xC1\xE8
</pre>
</td><td>
<pre>
48 8B 01 4C 8B C0 49 C1 E8
</pre>
</td></tr></table>

### KeyValues3::GetMember

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\xB7\x07\x31\xD2\x66\xC1\xE8\x2A\x83\xE0\x2A\x3C\x2A\x75\x2A\x48\x8B\x47\x2A\x85\xF6\x78\x2A\x3B\x70\x2A\x7D\x2A\x80\x78\x2A\x2A\x48\x8D\x50\x2A\x75\x2A\x8B\x40\x2A\x48\x63\xF6\x48\x8D\x14\xF2\x8D\x04\x85\x2A\x2A\x2A\x2A\x83\xE0\x2A\x48\x98\x48\x8B\x14\x02\x48\x89\xD0\xC3\x0F\x1F\x00\x48\x8B\x50\x2A\xEB\x2A\xCC\xCC\x31\xC9
</pre>
</td><td>
<pre>
0F B7 07 31 D2 66 C1 E8 ? 83 E0 ? 3C ? 75 ? 48 8B 47 ? 85 F6 78 ? 3B 70 ? 7D ? 80 78 ? ? 48 8D 50 ? 75 ? 8B 40 ? 48 63 F6 48 8D 14 F2 8D 04 85 ? ? ? ? 83 E0 ? 48 98 48 8B 14 02 48 89 D0 C3 0F 1F 00 48 8B 50 ? EB ? CC CC 31 C9
</pre>
</td></tr></table>

### KeyValues3::GetMemberCount

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\xB7\x07\x31\xD2\x66\xC1\xE8\x2A\x83\xE0\x2A\x3C\x2A\x75\x2A\x48\x8B\x47\x2A\x8B\x50
</pre>
</td><td>
<pre>
0F B7 07 31 D2 66 C1 E8 ? 83 E0 ? 3C ? 75 ? 48 8B 47 ? 8B 50
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x0F\xB6\x01\xC0\xE8\x2A\x24\x2A\x3C\x2A\x74\x2A\x33\xC0
</pre>
</td><td>
<pre>
0F B6 01 C0 E8 ? 24 ? 3C ? 74 ? 33 C0
</pre>
</td></tr></table>

### KeyValues3::GetMemberName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\xB7\x07\x66\xC1\xE8\x2A\x83\xE0\x2A\x3C\x2A\x75\x2A\x48\x8B\x47\x2A\x85\xF6
</pre>
</td><td>
<pre>
0F B7 07 66 C1 E8 ? 83 E0 ? 3C ? 75 ? 48 8B 47 ? 85 F6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x0F\xB6\x01\xC0\xE8\x2A\x24\x2A\x3C\x2A\x75\x2A\x48\x8B\x41\x2A\x85\xD2\x78\x2A\x3B\x50
</pre>
</td><td>
<pre>
0F B6 01 C0 E8 ? 24 ? 3C ? 75 ? 48 8B 41 ? 85 D2 78 ? 3B 50
</pre>
</td></tr></table>

### KeyValues3::GetString

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\xB7\x17\x66\xC1\xEA\x2A\x89\xD0\x83\xE0\x2A\x3C\x2A\x0F\x84\x2A\x2A\x2A\x2A\x80\xFA\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\xF0
</pre>
</td><td>
<pre>
0F B7 17 66 C1 EA ? 89 D0 83 E0 ? 3C ? 0F 84 ? ? ? ? 80 FA ? 0F 84 ? ? ? ? 48 89 F0
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\x09\x4D\x8B\xC1\x49\xC1\xE8\x2A
</pre>
</td><td>
<pre>
4C 8B 09 4D 8B C1 49 C1 E8 ?
</pre>
</td></tr></table>

### KeyValues3::KeyValues3

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\xC7\x07\x2A\x2A\x2A\x2A\x40\x80\xFE
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC ? 48 C7 07 ? ? ? ? 40 80 FE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x4C\x8B\x11\x41\xB9
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 4C 8B 11 41 B9
</pre>
</td></tr></table>

### KeyValues3::PrepareForType

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x4D\x89\xC7\x41\x56\x41\x55\x49\x89\xFD\x41\x54\x41\x89\xF4
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 4D 89 C7 41 56 41 55 49 89 FD 41 54 41 89 F4
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x4C\x8B\x11\x48\x8B\xD9
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 4C 8B 11 48 8B D9
</pre>
</td></tr></table>

### KeyValues3::ReadArrayFloat32

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x63\xEE\x41\x54\x49\x89\xD4\x53\x48\x83\xEC\x2A\x0F\xB7\x07\x66\xC1\xE8\x2A\x89\xC2\x83\xE2\x2A\x80\xFA\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\xFB\x80\xFA\x2A\x0F\x84\x2A\x2A\x2A\x2A\x3C\x2A\x0F\x84\x2A\x2A\x2A\x2A\x3C\x2A\x0F\x85
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 4C 63 EE 41 54 49 89 D4 53 48 83 EC ? 0F B7 07 66 C1 E8 ? 89 C2 83 E2 ? 80 FA ? 0F 84 ? ? ? ? 48 89 FB 80 FA ? 0F 84 ? ? ? ? 3C ? 0F 84 ? ? ? ? 3C ? 0F 85
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x41\x56\x48\x8B\xEC\x48\x83\xEC\x2A\x4C\x63\xF2
</pre>
</td><td>
<pre>
40 55 56 57 41 56 48 8B EC 48 83 EC ? 4C 63 F2
</pre>
</td></tr></table>

### KeyValues3::ReadArrayInt32

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x4C\x63\xEE\x41\x54\x53\x48\x89\xD3
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 4C 63 EE 41 54 53 48 89 D3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x41\x56\x48\x8B\xEC\x48\x83\xEC\x2A\x48\x8B\x01
</pre>
</td><td>
<pre>
40 55 56 57 41 56 48 8B EC 48 83 EC ? 48 8B 01
</pre>
</td></tr></table>

### KeyValues3::RemoveArrayElements

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\xB7\x07\x66\xC1\xE8\x2A\x83\xE0\x2A\x3C\x2A\x74\x2A\xC3
</pre>
</td><td>
<pre>
0F B7 07 66 C1 E8 ? 83 E0 ? 3C ? 74 ? C3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x41\x56\x48\x83\xEC\x2A\x0F\xB6\x01
</pre>
</td><td>
<pre>
40 55 56 41 56 48 83 EC ? 0F B6 01
</pre>
</td></tr></table>

### KeyValues3::RemoveMember_MemberName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x0F\xB7\x07\x66\xC1\xE8\x2A\x83\xE0\x2A\x3C\x2A\x74\x2A\x31\xC0\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x54\x53\x48\x8D\x4D
</pre>
</td><td>
<pre>
0F B7 07 66 C1 E8 ? 83 E0 ? 3C ? 74 ? 31 C0 C3 0F 1F 80 ? ? ? ? 55 48 89 E5 41 54 53 48 8D 4D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x0F\xB6\x01\x48\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 0F B6 01 48 8B D9
</pre>
</td></tr></table>

### KeyValues3::SetString

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x49\x89\xFD\x41\x54\x44\x0F\xB6\xE2
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 49 89 FD 41 54 44 0F B6 E2
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x85\xD2\x48\x8D\x1D
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 85 D2 48 8D 1D
</pre>
</td></tr></table>

### KeyValues3::~KeyValues3

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x53\x48\x89\xFB\x48\x83\xEC\x2A\x0F\xB7\x07
</pre>
</td><td>
<pre>
55 48 89 E5 53 48 89 FB 48 83 EC ? 0F B7 07
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x41\x57\x48\x83\xEC\x2A\x4C\x8B\x01
</pre>
</td><td>
<pre>
40 53 41 57 48 83 EC ? 4C 8B 01
</pre>
</td></tr></table>

### LogDirect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>tier0</td><td>
<pre>
\x55\x49\x89\xFA\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xD6
</pre>
</td><td>
<pre>
55 49 89 FA 48 89 E5 41 57 41 56 41 89 D6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>tier0</td><td>
<pre>
\x4C\x89\x4C\x24\x20\x44\x89\x44\x24\x18\x89\x54\x24\x10\x55
</pre>
</td><td>
<pre>
4C 89 4C 24 20 44 89 44 24 18 89 54 24 10 55
</pre>
</td></tr></table>

### NetworkStateChanged

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x07\x48\x85\xC0\x74\x2A\x48\x8B\x50
</pre>
</td><td>
<pre>
48 8B 07 48 85 C0 74 ? 48 8B 50
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x4C\x8B\xC2\x48\x8B\xD1\x48\x8B\x09
</pre>
</td><td>
<pre>
4C 8B C2 48 8B D1 48 8B 09
</pre>
</td></tr></table>

### Resource_FindBlockInfo

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>resourcesystem</td><td>
<pre>
\x48\xB8\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x55\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 66 0F EF C0 48 89 E5 41 57 41 56 41 55 41 54 53
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>resourcesystem</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x45\x33\xC9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 45 33 C9
</pre>
</td></tr></table>

### ScriptPrintMessageChatAll

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x89\xFE\x45\x31\xC9\x45\x31\xC0\x31\xC9\x31\xD2\xBF\x2A\x2A\x2A\x2A\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x80\x7F
</pre>
</td><td>
<pre>
48 89 FE 45 31 C9 45 31 C0 31 C9 31 D2 BF ? ? ? ? E9 ? ? ? ? CC CC CC CC CC CC CC CC CC 80 7F
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x38\x33\xC0\x48\x8B\xD1\x48\x89\x44\x24\x2A\x45\x33\xC9\x45\x33\xC0\x48\x89\x44\x24\x2A\xB9\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x38\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x89\x5C\x24\x2A
</pre>
</td><td>
<pre>
48 83 EC 38 33 C0 48 8B D1 48 89 44 24 ? 45 33 C9 45 33 C0 48 89 44 24 ? B9 ? ? ? ? E8 ? ? ? ? 48 83 C4 38 C3 CC CC CC CC CC CC CC CC 48 89 5C 24 ?
</pre>
</td></tr></table>

### ScriptSetConVarDouble

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x47\x2A\x66\x83\x78\x2A\x2A\x0F\x87\x2A\x2A\x2A\x2A\x55\x48\x8D\x15
</pre>
</td><td>
<pre>
48 8B 47 ? 66 83 78 ? ? 0F 87 ? ? ? ? 55 48 8D 15
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x56\x48\x83\xEC\x50
</pre>
</td><td>
<pre>
48 89 5C 24 08 56 48 83 EC 50
</pre>
</td></tr></table>

### ScriptSetConVarNumber

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x47\x2A\x66\x83\x78\x2A\x2A\x0F\x87\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x55\x41\x89\xD5\x41\x54\x48\x8D\x15\x2A\x2A\x2A\x2A\x53\x4C\x8D\x65\x2A\x89\xF3\x48\x83\xEC\x2A\x0F\xB7\x40\x2A\x48\x63\x04\x82\x48\x01\xD0\xFF\xE0\x0F\x1F\x80\x2A\x2A\x2A\x2A\x48\x89\xFE\xBA\x2A\x2A\x2A\x2A\x4C\x89\xE7\xE8\x2A\x2A\x2A\x2A\x89\xDE
</pre>
</td><td>
<pre>
48 8B 47 ? 66 83 78 ? ? 0F 87 ? ? ? ? 55 48 89 E5 41 55 41 89 D5 41 54 48 8D 15 ? ? ? ? 53 4C 8D 65 ? 89 F3 48 83 EC ? 0F B7 40 ? 48 63 04 82 48 01 D0 FF E0 0F 1F 80 ? ? ? ? 48 89 FE BA ? ? ? ? 4C 89 E7 E8 ? ? ? ? 89 DE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x7C\x24\x10\x55\x48\x8B\xEC\x48\x83\xEC\x30\x48\x8B\x41\x08\x8B\xDA\x49\x63\xF8
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 7C 24 10 55 48 8B EC 48 83 EC 30 48 8B 41 08 8B DA 49 63 F8
</pre>
</td></tr></table>

### ScriptSetConVarString

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xD5\x41\x54\x49\x89\xFC\x53\x48\x83\xEC\x2A\x4C\x8B\x77\x08
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 D5 41 54 49 89 FC 53 48 83 EC ? 4C 8B 77 08
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x6C\x24\x10\x48\x89\x74\x24\x18\x57\x41\x56\x41\x57\x48\x83\xEC\x30\x48\x8B\x71\x08
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 6C 24 10 48 89 74 24 18 57 41 56 41 57 48 83 EC 30 48 8B 71 08
</pre>
</td></tr></table>

### SendToServerConsole

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x35\x2A\x2A\x2A\x2A\x48\x89\xFA\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x8D\x9D\x2A\x2A\x2A\x2A\x48\x83\xEC\x78
</pre>
</td><td>
<pre>
55 48 8D 35 ? ? ? ? 48 89 FA 48 89 E5 41 55 41 54 53 48 8D 9D ? ? ? ? 48 83 EC 78
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x4C\x8B\xC1
</pre>
</td><td>
<pre>
40 53 48 81 EC ? ? ? ? 48 8B 05 ? ? ? ? 4C 8B C1
</pre>
</td></tr></table>

### SoundOpGameSystem::DoStartSoundEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x44\x89\xC6
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 44 89 C6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x48\x2A\x53\x57
</pre>
</td><td>
<pre>
48 8B C4 48 89 48 ? 53 57
</pre>
</td></tr></table>

### SoundOpGameSystem::SetSoundEventParamString

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x45\x89\xCF\x41\x56\x49\x89\xCE
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 45 89 CF 41 56 49 89 CE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x56\x57\x41\x56\x48\x81\xEC\x2A\x2A\x2A\x2A\x41\x80\x39
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 56 57 41 56 48 81 EC ? ? ? ? 41 80 39
</pre>
</td></tr></table>

### SoundOpGameSystem::StartSoundEventString

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x45\x89\xCE\x41\x55\x45\x89\xC5
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 45 89 CE 41 55 45 89 C5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x41\x54\x41\x55\x41\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\xF9
</pre>
</td><td>
<pre>
40 56 57 41 54 41 55 41 57 48 81 EC ? ? ? ? 4C 8B F9
</pre>
</td></tr></table>

### SoundOpGameSystem::StopSoundEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x8B\x0E\x85\xC9\x0F\x84
</pre>
</td><td>
<pre>
8B 0E 85 C9 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x56\x48\x83\xEC\x2A\x83\x3A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 56 48 83 EC ? 83 3A
</pre>
</td></tr></table>

### SoundOpGameSystem::StopSoundEventFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x85\xD2\x75\x2A\xC3\x0F\x1F\x00\x55\x48\x89\xE5
</pre>
</td><td>
<pre>
85 D2 75 ? C3 0F 1F 00 55 48 89 E5
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x45\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\x53\x41\x55
</pre>
</td><td>
<pre>
45 85 C0 0F 84 ? ? ? ? 53 41 55
</pre>
</td></tr></table>

### Source2_Init

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\xBD\x2A\x2A\x2A\x2A\x48\x8B\x3D\x2A\x2A\x2A\x2A\x48\x85\xFF
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 81 EC ? ? ? ? 48 89 BD ? ? ? ? 48 8B 3D ? ? ? ? 48 85 FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x40\x55\x53\x56\x57\x41\x54\x41\x56\x41\x57\x48\x8D\xAC\x24\x50\xFF\xFF\xFF
</pre>
</td><td>
<pre>
40 55 53 56 57 41 54 41 56 41 57 48 8D AC 24 50 FF FF FF
</pre>
</td></tr></table>

### StateChanged

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x80\xBF\x2A\x2A\x2A\x2A\x2A\x0F\x85\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x57\x49\x89\xD7
</pre>
</td><td>
<pre>
80 BF ? ? ? ? ? 0F 85 ? ? ? ? 55 48 89 E5 41 57 49 89 D7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x56\x57\x41\x55\x48\x8D\xAC\x24\x68\xFF\xFF\xFF
</pre>
</td><td>
<pre>
40 55 56 57 41 55 48 8D AC 24 68 FF FF FF
</pre>
</td></tr></table>

### StudioModel::GetAttachment

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x55\x41\x54\x49\x89\xD4\x53\x48\x8D\x55\x2A\x48\x89\xCB
</pre>
</td><td>
<pre>
55 48 89 E5 41 55 41 54 49 89 D4 53 48 8D 55 ? 48 89 CB
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x2A\x49\x8B\xD8\x49\x8B\xF1\x4C\x8D\x44\x24\x30
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 57 48 83 EC ? 49 8B D8 49 8B F1 4C 8D 44 24 30
</pre>
</td></tr></table>

### StudioModel::LookupAttachment

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x97\x2A\x2A\x2A\x2A\x31\xC0\x48\x85\xD2\x0F\x84
</pre>
</td><td>
<pre>
48 8B 97 ? ? ? ? 31 C0 48 85 D2 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x74\x24\x10\x57\x48\x83\xEC\x30\x48\x8B\x81\x40\x02\x00\x00\x4D\x8B\xC8
</pre>
</td><td>
<pre>
48 89 74 24 10 57 48 83 EC 30 48 8B 81 40 02 00 00 4D 8B C8
</pre>
</td></tr></table>

### UTIL_DispatchEffect

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x49\x89\xFE\x41\x55\x4C\x8D\x6D\x2A\x41\x54\x4C\x89\xEF
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 FE 41 55 4C 8D 6D ? 41 54 4C 89 EF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x57\x48\x83\xEC\x60\x48\x8B\xF9\x48\x8B\xDA
</pre>
</td><td>
<pre>
48 89 5C 24 10 57 48 83 EC 60 48 8B F9 48 8B DA
</pre>
</td></tr></table>

### UTIL_DispatchEffectFilter

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8D\x05\x2A\x2A\x2A\x2A\x55\x48\x89\xE5\x41\x56\x49\x89\xF6
</pre>
</td><td>
<pre>
48 8D 05 ? ? ? ? 55 48 89 E5 41 56 49 89 F6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x10\x48\x89\x6C\x24\x18\x57\x48\x83\xEC\x40\x48\x8B\xE9\x49\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 10 48 89 6C 24 18 57 48 83 EC 40 48 8B E9 49 8B D9
</pre>
</td></tr></table>

### UTIL_DispatchParticleEffectFilter_Attachment

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

### UTIL_DispatchParticleEffectFilter_Position

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xF8\x48\x89\xE5\x41\x57\x45\x89\xCF\x41\x56\x48\x8D\x7D\x2A\x4D\x89\xC6\x41\x55\x41\x89\xCD\x41\x54\x49\x89\xF4\x48\x89\xC6\x53\x89\xD3\x48\x83\xEC\x2A\x66\x0F\xD6\x45\x2A\xF3\x0F\x11\x4D\x2A\x66\x0F\xD6\x55\x2A\xF3\x0F\x11\x5D\x2A\xE8
</pre>
</td><td>
<pre>
55 48 89 F8 48 89 E5 41 57 45 89 CF 41 56 48 8D 7D ? 4D 89 C6 41 55 41 89 CD 41 54 49 89 F4 48 89 C6 53 89 D3 48 83 EC ? 66 0F D6 45 ? F3 0F 11 4D ? 66 0F D6 55 ? F3 0F 11 5D ? E8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x20\x57\x48\x81\xEC\x80\x00\x00\x00\x48\x8B\xFA
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 20 57 48 81 EC 80 00 00 00 48 8B FA
</pre>
</td></tr></table>

### UTIL_GetEconItemSchema

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x54\x53\x48\x8B\x1D\x2A\x2A\x2A\x2A\x48\x85\xDB\x74\x2A\x48\x89\xD8
</pre>
</td><td>
<pre>
55 48 89 E5 41 54 53 48 8B 1D ? ? ? ? 48 85 DB 74 ? 48 89 D8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x85\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x30\xB9\x2A\x2A\x2A\x2A\x48\x89\x7C\x24\x20\xE8\x2A\x2A\x2A\x2A\x33\xFF\x48\x8B\xD8\x48\x85\xC0\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x7B\x08\xB9\x2A\x2A\x2A\x2A\x48\x89\x03\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x48\x8B\xC8\xE8\x2A\x2A\x2A\x2A\x48\x8B\xF8\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x7B\x08\x48\x8B\x7C\x24\x20
</pre>
</td><td>
<pre>
48 83 EC ? 48 8B 05 ? ? ? ? 48 85 C0 0F 85 ? ? ? ? 48 89 5C 24 30 B9 ? ? ? ? 48 89 7C 24 20 E8 ? ? ? ? 33 FF 48 8B D8 48 85 C0 74 ? 48 8D 05 ? ? ? ? 48 89 7B 08 B9 ? ? ? ? 48 89 03 E8 ? ? ? ? 48 85 C0 74 ? 48 8B C8 E8 ? ? ? ? 48 8B F8 48 8D 05 ? ? ? ? 48 89 7B 08 48 8B 7C 24 20
</pre>
</td></tr></table>

### UTIL_GetGameSystemFactory

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x77\x2A\x48\x89\x07\x48\x8B\x05
</pre>
</td><td>
<pre>
48 8D 05 ? ? ? ? 48 89 77 ? 48 89 07 48 8B 05
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x51\x10\x48\x89\x01\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x89\x41\x08
</pre>
</td><td>
<pre>
48 89 51 10 48 89 01 48 8B 05 ? ? ? ? 48 89 41 08
</pre>
</td></tr></table>

### UTIL_GetParticleSystemIndex

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x85\xF6
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 49 89 FC 53 48 81 EC ? ? ? ? 48 85 F6
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x57\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x8B\xDA\x48\x8B\xF1\x48\x85\xD2
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 10 57 48 81 EC ? ? ? ? 48 8B DA 48 8B F1 48 85 D2
</pre>
</td></tr></table>

### UTIL_RadioMessage

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x57\x4C\x8D\x7D\x2A\x41\x56\x49\x89\xCE
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 48 89 E5 41 57 4C 8D 7D ? 41 56 49 89 CE
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x18\x48\x89\x7C\x24\x20\x55\x41\x56\x41\x57\x48\x8D\x6C\x24\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 08 48 89 74 24 18 48 89 7C 24 20 55 41 56 41 57 48 8D 6C 24 D9
</pre>
</td></tr></table>

### UTIL_SetModel

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
\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\x4C\x8B\xC2\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x8D\x54\x24\x40\x48\x8B\x01\xFF\x50\x60\x48\x8B\x44\x24\x40\x48\x8D\x54\x24\x48\x48\x8B\xCB\x48\x89\x44\x24\x48\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x2A\x5B\xC3\xCC\xCC\xCC\xCC\xCC\x48\x89\x5C\x24\x10
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B D9 4C 8B C2 48 8B 0D ? ? ? ? 48 8D 54 24 40 48 8B 01 FF 50 60 48 8B 44 24 40 48 8D 54 24 48 48 8B CB 48 89 44 24 48 E8 ? ? ? ? 48 83 C4 ? 5B C3 CC CC CC CC CC 48 89 5C 24 10
</pre>
</td></tr></table>

