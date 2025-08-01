# cs2-retakes-allocator 

Last updated: August 1, 2025 at 10:35:34 PM UTC

* Manifests: [8654541613307577757](https://steamdb.info/depot/2347771/history/?changeid=M:8654541613307577757), [7997552756635206048](https://steamdb.info/depot/2347773/history/?changeid=M:7997552756635206048), [7894037982598372833](https://steamdb.info/depot/2347770/history/?changeid=M:7894037982598372833)
* Repository: https://github.com/yonilerner/cs2-retakes-allocator
* Gamedata: https://github.com/yonilerner/cs2-retakes-allocator/blob/main/Resources/RetakesAllocator_gamedata.json

## Signatures

### CCSPlayer_ItemServices_CanAcquire

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x48\x8D\x45\x2A\x41\x55\x41\x54\x53\x48\x89\xCB
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 48 8D 45 ? 41 55 41 54 53 48 89 CB
</pre>
</td></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x44\x89\x44\x24\x2A\x48\x89\x54\x24\x2A\x48\x89\x4C\x24\x2A\x55\x56\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x8B\xEC
</pre>
</td><td>
<pre>
44 89 44 24 ? 48 89 54 24 ? 48 89 4C 24 ? 55 56 57 41 54 41 55 41 56 41 57 48 8B EC
</pre>
</td></tr></table>

### GetCSWeaponDataFromKey

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x89\xFE\x41\x55\x41\x54\x45
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 FE 41 55 41 54 45
</pre>
</td></tr><tr><td>❌</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x74\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xFA\x8B\xF1\x48\x85\xD2\x0F\x84
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 48 8B FA 8B F1 48 85 D2 0F 84
</pre>
</td></tr></table>

### GiveNamedItem2

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>❌</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x48\x89\x7D\x2A\x44\x89\x45
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 48 89 7D ? 44 89 45
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

