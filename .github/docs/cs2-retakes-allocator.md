# cs2-retakes-allocator 

Last updated: November 19, 2025 at 2:27:38 AM UTC

* Manifests: [9000543791517809841](https://steamdb.info/depot/2347770/history/?changeid=M:9000543791517809841), [148033860537571371](https://steamdb.info/depot/2347771/history/?changeid=M:148033860537571371), [5994570138603699463](https://steamdb.info/depot/2347773/history/?changeid=M:5994570138603699463)
* Repository: https://github.com/yonilerner/cs2-retakes-allocator
* Gamedata: https://github.com/yonilerner/cs2-retakes-allocator/blob/main/Resources/RetakesAllocator_gamedata.json

## Signatures

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x31\xD2\x48\x89\xE5\x53\x89\xFB
</pre>
</td><td>
<pre>
55 31 D2 48 89 E5 53 89 FB
</pre>
</td></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x33\xED\x48\x8B\xFA\x8B\xF1
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 48 83 EC ? 33 ED 48 8B FA 8B F1
</pre>
</td></tr></table>

### CCSPlayer_ItemServices_CanAcquire

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

### GiveNamedItem2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x45\x31\xC9\x45\x31\xC0\x31\xC9\x31\xD2\xE9\x2A\x2A\x2A\x2A\xCC\x55\x45\x31\xC9
</pre>
</td><td>
<pre>
45 31 C9 45 31 C0 31 C9 31 D2 E9 ? ? ? ? CC 55 45 31 C9
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x2A\x48\xC7\x44\x24\x2A\x2A\x2A\x2A\x2A\x45\x33\xC9\x45\x33\xC0\xC6\x44\x24\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x83\xC4\x2A\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x83\xEC
</pre>
</td><td>
<pre>
48 83 EC ? 48 C7 44 24 ? ? ? ? ? 45 33 C9 45 33 C0 C6 44 24 ? ? E8 ? ? ? ? 48 83 C4 ? C3 CC CC CC CC CC CC CC CC CC CC CC CC CC CC 48 83 EC
</pre>
</td></tr></table>

