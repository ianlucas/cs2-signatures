# cs2-ss2-match 

Last updated: January 11, 2026 at 11:20:31 PM UTC

* Manifests: [8348690621754004818](https://steamdb.info/depot/2347770/history/?changeid=M:8348690621754004818), [3970280707550781410](https://steamdb.info/depot/2347771/history/?changeid=M:3970280707550781410), [8128465550651630543](https://steamdb.info/depot/2347773/history/?changeid=M:8128465550651630543)
* Repository: https://github.com/ianlucas/cs2-ss2-match
* Gamedata: https://github.com/ianlucas/cs2-ss2-match/blob/main/resources/gamedata/signatures.jsonc

## Signatures

### CCSBotManager::MaintainBotQuota

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x31\xF6\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x31\xFF
</pre>
</td><td>
<pre>
55 31 F6 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 31 FF
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x41\x56\x48\x8D\x6C\x24\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x8B\xF1\xFF\x15
</pre>
</td><td>
<pre>
40 55 41 56 48 8D 6C 24 ? 48 81 EC ? ? ? ? 4C 8B F1 FF 15
</pre>
</td></tr></table>

### CCSGameRules::AreTeamsPlayingSwitchedSides

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x8B\x87\x2A\x2A\x2A\x2A\x8B\x97
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 8B 87 ? ? ? ? 8B 97
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x8B\x81\x2A\x2A\x2A\x2A\x48\x8B\xD9\x8B\x91
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 8B 81 ? ? ? ? 48 8B D9 8B 91
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
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x48\x2A\x41\x54\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\x58
</pre>
</td><td>
<pre>
48 8B C4 48 89 48 ? 41 54 48 81 EC ? ? ? ? 48 89 58
</pre>
</td></tr></table>

### CCSGameRules::IsLastRoundBeforeHalfTime

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\xBE\x2A\x2A\x2A\x2A\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x8D\x3D\x2A\x2A\x2A\x2A\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x74
</pre>
</td><td>
<pre>
55 BE ? ? ? ? 48 89 E5 41 55 41 54 53 48 89 FB 48 8D 3D ? ? ? ? 48 83 EC ? E8 ? ? ? ? 48 85 C0 74
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x8B\xD9\xBA\x2A\x2A\x2A\x2A\x48\x8D\x0D\x2A\x2A\x2A\x2A\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x75\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x8B\x40\x2A\x80\x38\x2A\x0F\x84\x2A\x2A\x2A\x2A\x83\xBB
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 8B D9 BA ? ? ? ? 48 8D 0D ? ? ? ? E8 ? ? ? ? 48 85 C0 75 ? 48 8B 05 ? ? ? ? 48 8B 40 ? 80 38 ? 0F 84 ? ? ? ? 83 BB
</pre>
</td></tr></table>

### CCSPlayerPawnBase::IncrementNumMVPs

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xFC\x53\x48\x8D\x3D\x2A\x2A\x2A\x2A\x89\xF3
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 FC 53 48 8D 3D ? ? ? ? 89 F3
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x55\x57\x41\x57\x48\x8B\xEC\x48\x81\xEC
</pre>
</td><td>
<pre>
40 55 57 41 57 48 8B EC 48 81 EC
</pre>
</td></tr></table>

### CEconItemSchema::GetItemDefinition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x8B\x87\x2A\x2A\x2A\x2A\x49\x89\xFA\x41\x89\xD0\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\x41\x89\xF1\x55\x41\xC1\xE9\x2A\x48\x89\xE5\x41\x57\x45\x31\xFF\x41\x31\xF1\x41\x56\x45\x69\xC9\x2A\x2A\x2A\x2A\x41\x55\x41\x54\x53\x44\x89\xC8\xC1\xE8\x2A\x41\x31\xC1\x8B\xBF\x2A\x2A\x2A\x2A\x45\x69\xC9\x2A\x2A\x2A\x2A\x44\x89\xC8\xC1\xE8\x2A\x41\x31\xC1\x8D\x47\x2A\x44\x21\xC8\x41\xF7\x82\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x74\x2A\x4D\x8B\xBA\x2A\x2A\x2A\x2A\x48\x98\x41\x8B\x04\x87\x83\xF8\x2A\x0F\x84\x2A\x2A\x2A\x2A\x45\x8B\x9A\x2A\x2A\x2A\x2A\x41\xF7\xC3\x2A\x2A\x2A\x2A\x74\x2A\x49\x8B\x9A\x2A\x2A\x2A\x2A\xEB\x2A\x66\x2E\x0F\x1F\x84\x00\x2A\x2A\x2A\x2A\x8B\x41\x2A\x83\xF8\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x63\xD0\x48\x8D\x0C\x52\x48\x8D\x0C\xCB\x3B\x31\x75\x2A\x0F\x1F\x44\x00\x2A\x85\xC0\x78\x2A\x41\x39\x82\x2A\x2A\x2A\x2A\x7E\x2A\x31\xC0\x41\x81\xE3\x2A\x2A\x2A\x2A\x74\x2A\x49\x8B\x82\x2A\x2A\x2A\x2A\x48\x8D\x14\x52\x48\x8D\x04\xD0\x83\x78\x2A\x2A\x7C\x2A\x48\x8B\x40\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x40\x2A\x8B\x04\xCD\x2A\x2A\x2A\x2A\x83\xF8\x2A\x74\x2A\x48\x63\xD0\x48\x8D\x0C\x52\x3B\x34\xCD
</pre>
</td><td>
<pre>
8B 87 ? ? ? ? 49 89 FA 41 89 D0 85 C0 0F 84 ? ? ? ? 41 89 F1 55 41 C1 E9 ? 48 89 E5 41 57 45 31 FF 41 31 F1 41 56 45 69 C9 ? ? ? ? 41 55 41 54 53 44 89 C8 C1 E8 ? 41 31 C1 8B BF ? ? ? ? 45 69 C9 ? ? ? ? 44 89 C8 C1 E8 ? 41 31 C1 8D 47 ? 44 21 C8 41 F7 82 ? ? ? ? ? ? ? ? 74 ? 4D 8B BA ? ? ? ? 48 98 41 8B 04 87 83 F8 ? 0F 84 ? ? ? ? 45 8B 9A ? ? ? ? 41 F7 C3 ? ? ? ? 74 ? 49 8B 9A ? ? ? ? EB ? 66 2E 0F 1F 84 00 ? ? ? ? 8B 41 ? 83 F8 ? 0F 84 ? ? ? ? 48 63 D0 48 8D 0C 52 48 8D 0C CB 3B 31 75 ? 0F 1F 44 00 ? 85 C0 78 ? 41 39 82 ? ? ? ? 7E ? 31 C0 41 81 E3 ? ? ? ? 74 ? 49 8B 82 ? ? ? ? 48 8D 14 52 48 8D 04 D0 83 78 ? ? 7C ? 48 8B 40 ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 40 ? 8B 04 CD ? ? ? ? 83 F8 ? 74 ? 48 63 D0 48 8D 0C 52 3B 34 CD
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xD9\x89\x54\x24
</pre>
</td><td>
<pre>
48 89 5C 24 ? 57 48 83 EC ? 48 8B D9 89 54 24
</pre>
</td></tr></table>

### CEconItemSchema::GetItemDefinitionByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x80\xBF\x2A\x2A\x2A\x2A\x2A\x75
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 80 BF ? ? ? ? ? 75
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x80\xB9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 56 80 B9
</pre>
</td></tr></table>

### GetItemSchema

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x48\x8B\x40\x2A\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x55\xBF\x2A\x2A\x2A\x2A\x48\x89\xE5\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\xBF\x2A\x2A\x2A\x2A\x48\x89\xC3\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\x89\x03\xE8\x2A\x2A\x2A\x2A\x48\x89\xC7\x48\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x45\x2A\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\x1D\x2A\x2A\x2A\x2A\x48\x89\x13\x48\x89\x43\x2A\x48\x8B\x5D\x2A\xC9\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x55
</pre>
</td><td>
<pre>
48 8B 05 ? ? ? ? 48 85 C0 74 ? 48 8B 40 ? C3 0F 1F 80 ? ? ? ? 55 BF ? ? ? ? 48 89 E5 53 48 83 EC ? E8 ? ? ? ? BF ? ? ? ? 48 89 C3 48 8D 05 ? ? ? ? 48 C7 43 ? ? ? ? ? 48 89 03 E8 ? ? ? ? 48 89 C7 48 89 45 ? E8 ? ? ? ? 48 8B 45 ? 48 8D 15 ? ? ? ? 48 89 1D ? ? ? ? 48 89 13 48 89 43 ? 48 8B 5D ? C9 C3 CC CC CC CC CC CC CC CC CC CC CC 55
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x83\xEC\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x85\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x2A\xB9\x2A\x2A\x2A\x2A\x48\x89\x7C\x24\x2A\xE8\x2A\x2A\x2A\x2A\x33\xFF\x48\x8B\xD8\x48\x85\xC0\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x7B\x2A\xB9\x2A\x2A\x2A\x2A\x48\x89\x03\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x48\x8B\xC8\xE8\x2A\x2A\x2A\x2A\x48\x8B\xF8\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x7B\x2A\x48\x89\x03\x48\x8B\xC7\x48\x8B\x7C\x24\x2A\x48\x89\x1D\x2A\x2A\x2A\x2A\x48\x8B\x5C\x24\x2A\x48\x83\xC4\x2A\xC3\x48\x8B\x47\x2A\x48\x8B\x5C\x24\x2A\x48\x89\x3D\x2A\x2A\x2A\x2A\x48\x8B\x7C\x24\x2A\x48\x83\xC4\x2A\xC3\x48\x8B\x40\x2A\x48\x83\xC4\x2A\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x8B\x41
</pre>
</td><td>
<pre>
48 83 EC ? 48 8B 05 ? ? ? ? 48 85 C0 0F 85 ? ? ? ? 48 89 5C 24 ? B9 ? ? ? ? 48 89 7C 24 ? E8 ? ? ? ? 33 FF 48 8B D8 48 85 C0 74 ? 48 8D 05 ? ? ? ? 48 89 7B ? B9 ? ? ? ? 48 89 03 E8 ? ? ? ? 48 85 C0 74 ? 48 8B C8 E8 ? ? ? ? 48 8B F8 48 8D 05 ? ? ? ? 48 89 7B ? 48 89 03 48 8B C7 48 8B 7C 24 ? 48 89 1D ? ? ? ? 48 8B 5C 24 ? 48 83 C4 ? C3 48 8B 47 ? 48 8B 5C 24 ? 48 89 3D ? ? ? ? 48 8B 7C 24 ? 48 83 C4 ? C3 48 8B 40 ? 48 83 C4 ? C3 CC CC CC CC CC CC CC CC CC CC CC CC 48 8B 41
</pre>
</td></tr></table>

