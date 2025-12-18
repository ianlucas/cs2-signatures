# ss2-inventory-simulator 

Last updated: December 18, 2025 at 11:50:17 PM UTC

* Manifests: [4959080239691313767](https://steamdb.info/depot/2347770/history/?changeid=M:4959080239691313767), [3701264129774428822](https://steamdb.info/depot/2347771/history/?changeid=M:3701264129774428822), [8233538962228710423](https://steamdb.info/depot/2347773/history/?changeid=M:8233538962228710423)
* Repository: https://github.com/ianlucas/ss2-inventory-simulator
* Gamedata: https://github.com/ianlucas/ss2-inventory-simulator/blob/main/resources/gamedata/signatures.jsonc

## Signatures

### CCSPlayerInventory::GetItemInLoadout

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x83\xFA
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 83 FA
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x56\x48\x83\xEC\x2A\x49\x63\xF0
</pre>
</td><td>
<pre>
48 8B C4 56 48 83 EC ? 49 63 F0
</pre>
</td></tr></table>

### CCSPlayerPawn::IsAbleToApplySpray

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xD6\x41\x55\x48\x8D\x95\x2A\x2A\x2A\x2A\x49\x89\xCD
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 D6 41 55 48 8D 95 ? ? ? ? 49 89 CD
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x70\x2A\x48\x89\x78\x2A\x55\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x89\x70
</pre>
</td><td>
<pre>
48 8B C4 48 89 58 ? 48 89 70 ? 48 89 78 ? 55 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 4C 89 70
</pre>
</td></tr></table>

### CCSPlayerPawn::SetModelFromClass

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x4C\x8D\xAF\x2A\x2A\x2A\x2A\x41\x54\x53
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 4C 8D AF ? ? ? ? 41 54 53
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x56\x57\x41\x56\x48\x83\xEC\x2A\x48\x8B\xD9
</pre>
</td><td>
<pre>
48 89 5C 24 ? 56 57 41 56 48 83 EC ? 48 8B D9
</pre>
</td></tr></table>

### CCSPlayerPawn::UpdateModelFromLoadout

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x8B\x8F\x2A\x2A\x2A\x2A\x83\xF9\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x35\x2A\x2A\x2A\x2A\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x83\xF9\x2A\x0F\x84\x2A\x2A\x2A\x2A\x0F\xB7\x87\x2A\x2A\x2A\x2A\x48\x89\xC2\x48\xC1\xEA\x2A\x83\xE2\x2A\x48\x8B\x14\xD6\x48\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\x25\x2A\x2A\x2A\x2A\x48\x6B\xC0\x2A\x48\x01\xD0\x3B\x48\x2A\x0F\x85\x2A\x2A\x2A\x2A\x4C\x8B\x28
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 8B 8F ? ? ? ? 83 F9 ? 0F 84 ? ? ? ? 48 8B 35 ? ? ? ? 48 85 F6 0F 84 ? ? ? ? 83 F9 ? 0F 84 ? ? ? ? 0F B7 87 ? ? ? ? 48 89 C2 48 C1 EA ? 83 E2 ? 48 8B 14 D6 48 85 D2 0F 84 ? ? ? ? 25 ? ? ? ? 48 6B C0 ? 48 01 D0 3B 48 ? 0F 85 ? ? ? ? 4C 8B 28
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x40\x56\x57\x41\x54\x48\x83\xEC\x2A\x48\x8B\xF9\x45\x33\xE4
</pre>
</td><td>
<pre>
40 56 57 41 54 48 83 EC ? 48 8B F9 45 33 E4
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

### CCSPlayer_ItemServices::UpdateWearables

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
\x40\x55\x41\x56\x48\x83\xEC\x2A\x48\x83\x79
</pre>
</td><td>
<pre>
40 55 41 56 48 83 EC ? 48 83 79
</pre>
</td></tr></table>

### CEconItemView::CEconItemView

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x41\x56\x4C\x8D\x3D
</pre>
</td><td>
<pre>
55 48 8D 05 ? ? ? ? 66 0F EF C0 48 89 E5 41 57 41 56 4C 8D 3D
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x2A\x48\x8B\xF9\x48\x8D\x05
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 41 54 41 55 41 56 41 57 48 83 EC ? 48 8B F9 48 8D 05
</pre>
</td></tr></table>

### CEconItemView::operator=

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x74
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 74
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x48\x83\xEC\x2A\x48\x8B\xF9\x48\x8B\xF2
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 56 48 83 EC ? 48 8B F9 48 8B F2
</pre>
</td></tr></table>

### CPlayerInventory::SendInventoryUpdateEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
\x31\xC0\x83\x7F\x2A\x2A\x75\x2A\x48\x8B\x47\x2A\x48\x89\xC7
</pre>
</td><td>
<pre>
31 C0 83 7F ? ? 75 ? 48 8B 47 ? 48 89 C7
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
\x83\x79\x2A\x2A\x0F\x10\x49
</pre>
</td><td>
<pre>
83 79 ? ? 0F 10 49
</pre>
</td></tr></table>

### CServerSideClientBase::ActivatePlayer

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Linux</td><td>engine2</td><td>
<pre>
\x55\x48\x89\xE5\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? E8
</pre>
</td></tr><tr><td>✅</td><td>Windows</td><td>engine2</td><td>
<pre>
\x40\x53\x48\x83\xEC\x2A\x48\x89\x6C\x24\x2A\x48\x8B\xD9\x48\x89\x74\x24\x2A\x48\x89\x7C\x24
</pre>
</td><td>
<pre>
40 53 48 83 EC ? 48 89 6C 24 ? 48 8B D9 48 89 74 24 ? 48 89 7C 24
</pre>
</td></tr></table>

