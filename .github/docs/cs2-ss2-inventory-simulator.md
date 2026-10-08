# cs2-ss2-inventory-simulator

Last updated: October 8, 2026 at 10:36:57 PM GMT

* Manifests: [571072184844314041](https://steamdb.info/depot/2347771/history/?changeid=M:571072184844314041), [4758919807587010422](https://steamdb.info/depot/2347770/history/?changeid=M:4758919807587010422), [8144769780027006476](https://steamdb.info/depot/2347773/history/?changeid=M:8144769780027006476)
* Repository: https://github.com/ianlucas/cs2-ss2-inventory-simulator
* Gamedata: https://github.com/ianlucas/cs2-ss2-inventory-simulator/blob/main/resources/gamedata/signatures.jsonc

## Signatures

### CCSPlayer_ItemServices::SetWearables

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>❌</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x4C\x8B\x67\x2A\x4D\x85\xE4\x0F\x84\x2A\x2A\x2A\x2A\x48\x89\xDF</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 4C 8B 67 ? 4D 85 E4 0F 84 ? ? ? ? 48 89 DF</pre></td></tr>
<tr><td>❌</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x41\x56\x48\x83\xEC\x2A\x48\x83\x79</pre></td><td><pre>40 55 41 56 48 83 EC ? 48 83 79</pre></td></tr>
</table>

### CEconItemView::CEconItemView

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x57\x41\x54\x41\x55\x41\x56\x41\x57\x48\x83\xEC\x2A\x48\x8B\xF9\x48\x8D\x05</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 57 41 54 41 55 41 56 41 57 48 83 EC ? 48 8B F9 48 8D 05</pre></td></tr>
<tr><td>❌</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x8D\x05\x2A\x2A\x2A\x2A\x66\x0F\xEF\xC0\x48\x89\xE5\x41\x57\x45\x31\xFF</pre></td><td><pre>55 48 8D 05 ? ? ? ? 66 0F EF C0 48 89 E5 41 57 45 31 FF</pre></td></tr>
</table>

### CCSPlayerPawn::SetModelFromClass

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x56\x41\x55\x4C\x8D\xAF\x2A\x2A\x2A\x2A\x41\x54\x53\x48\x89\xFB</pre></td><td><pre>55 48 89 E5 41 56 41 55 4C 8D AF ? ? ? ? 41 54 53 48 89 FB</pre></td></tr>
<tr><td>⚠️(2)</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x56\x57\x41\x56\x48\x83\xEC\x2A\x48\x8B\xD9</pre></td><td><pre>48 89 5C 24 ? 56 57 41 56 48 83 EC ? 48 8B D9</pre></td></tr>
</table>

### CCSChickenManager::ServerGamePostSimulate

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x4C\x8D\x25\x2A\x2A\x2A\x2A\x49\x83\x3C\x24\x2A\x74\x2A\x4C\x8D\x6F</pre></td><td><pre>55 48 89 E5 41 55 41 54 53 48 83 EC ? 4C 8D 25 ? ? ? ? 49 83 3C 24 ? 74 ? 4C 8D 6F</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x48\x83\x3D\x2A\x2A\x2A\x2A\x2A\x48\x8B\xD9\x0F\x84</pre></td><td><pre>40 53 48 83 EC ? 48 83 3D ? ? ? ? ? 48 8B D9 0F 84</pre></td></tr>
</table>

### CCSPlayerController::GetPetChicken

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x8B\x8F\x2A\x2A\x2A\x2A\x83\xF9\x2A\x74\x2A\x48\x8B\x35\x2A\x2A\x2A\x2A\x48\x85\xF6\x74\x2A\x83\xF9\x2A\x74\x2A\x0F\xB7\x87\x2A\x2A\x2A\x2A\x48\x89\xC2\x48\xC1\xEA\x2A\x83\xE2\x2A\x48\x8B\x14\xD6\x48\x85\xD2\x74\x2A\x25\x2A\x2A\x2A\x2A\x48\x6B\xC0\x2A\x48\x01\xD0\x31\xD2\x3B\x48\x2A\x75\x2A\x48\x8B\x10\x48\x89\xD0\xC3\x31\xD2\x48\x89\xD0\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x85\xF6</pre></td><td><pre>8B 8F ? ? ? ? 83 F9 ? 74 ? 48 8B 35 ? ? ? ? 48 85 F6 74 ? 83 F9 ? 74 ? 0F B7 87 ? ? ? ? 48 89 C2 48 C1 EA ? 83 E2 ? 48 8B 14 D6 48 85 D2 74 ? 25 ? ? ? ? 48 6B C0 ? 48 01 D0 31 D2 3B 48 ? 75 ? 48 8B 10 48 89 D0 C3 31 D2 48 89 D0 C3 CC CC CC CC CC CC CC CC CC CC 48 85 F6</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x8B\x91\x2A\x2A\x2A\x2A\x45\x33\xD2\x83\xFA\x2A\x74\x2A\x48\x8B\x0D\x2A\x2A\x2A\x2A\x48\x85\xC9\x74\x2A\x83\xFA\x2A\x74\x2A\x8B\xC2\x25\x2A\x2A\x2A\x2A\x44\x8B\xC0\x48\xC1\xE8\x2A\x4C\x8B\x0C\xC1\x4D\x85\xC9\x74\x2A\x41\x81\xE0\x2A\x2A\x2A\x2A\x49\x6B\xC0\x2A\x49\x03\xC1\x74\x2A\x39\x50\x2A\x49\x0F\x45\xC2\xEB\x2A\x49\x8B\xC2\x48\x85\xC0\x74\x2A\x48\x8B\x00\xC3\x49\x8B\xC2\xC3\xCC\xE9\x2A\x2A\x2A\x2A\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x41\x0F\xB7\x40</pre></td><td><pre>8B 91 ? ? ? ? 45 33 D2 83 FA ? 74 ? 48 8B 0D ? ? ? ? 48 85 C9 74 ? 83 FA ? 74 ? 8B C2 25 ? ? ? ? 44 8B C0 48 C1 E8 ? 4C 8B 0C C1 4D 85 C9 74 ? 41 81 E0 ? ? ? ? 49 6B C0 ? 49 03 C1 74 ? 39 50 ? 49 0F 45 C2 EB ? 49 8B C2 48 85 C0 74 ? 48 8B 00 C3 49 8B C2 C3 CC E9 ? ? ? ? CC CC CC CC CC CC CC CC CC CC CC 41 0F B7 40</pre></td></tr>
</table>

### CCSPlayerController::SetPetChicken

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x85\xF6\x74\x2A\x48\x8B\x56\x2A\x48\x85\xD2\x74\x2A\x8B\x42\x2A\x8B\x4A\x2A\xC1\xE8\x2A\x83\xE1\x2A\x29\xC8\x83\x7A\x2A\x2A\x74\x2A\x0F\xB7\x52\x2A\x66\x81\xE2\x2A\x2A\xC1\xE0\x2A\x0F\xB7\xD2\x09\xD0\x89\x87\x2A\x2A\x2A\x2A\xC3\x66\x0F\x1F\x44\x00\x2A\xC7\x87\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\xC3\x0F\x1F\x44\x00\x2A\xBA\x2A\x2A\x2A\x2A\xEB\x2A\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x55\x48\x8D\x05</pre></td><td><pre>48 85 F6 74 ? 48 8B 56 ? 48 85 D2 74 ? 8B 42 ? 8B 4A ? C1 E8 ? 83 E1 ? 29 C8 83 7A ? ? 74 ? 0F B7 52 ? 66 81 E2 ? ? C1 E0 ? 0F B7 D2 09 D0 89 87 ? ? ? ? C3 66 0F 1F 44 00 ? C7 87 ? ? ? ? ? ? ? ? C3 0F 1F 44 00 ? BA ? ? ? ? EB ? CC CC CC CC CC CC CC CC CC 55 48 8D 05</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x4C\x8B\xC9\x48\x85\xD2\x74\x2A\x48\x8B\x42\x2A\x48\x85\xC0\x74\x2A\x8B\x50\x2A\xB9\x2A\x2A\x2A\x2A\x8B\x40\x2A\x44\x8B\xC2\x83\xE0\x2A\x41\xC1\xE8\x2A\x44\x2B\xC0\x8B\xC2\x23\xC1\x41\xC1\xE0\x2A\x83\xFA\x2A\x0F\x45\xC8\x44\x0B\xC1\x45\x89\x81\x2A\x2A\x2A\x2A\xC3\xC7\x81\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\xC3\xCC\xCC\xCC\x40\x55\x41\x56</pre></td><td><pre>4C 8B C9 48 85 D2 74 ? 48 8B 42 ? 48 85 C0 74 ? 8B 50 ? B9 ? ? ? ? 8B 40 ? 44 8B C2 83 E0 ? 41 C1 E8 ? 44 2B C0 8B C2 23 C1 41 C1 E0 ? 83 FA ? 0F 45 C8 44 0B C1 45 89 81 ? ? ? ? C3 C7 81 ? ? ? ? ? ? ? ? C3 CC CC CC 40 55 41 56</pre></td></tr>
</table>

### CCSPlayerInventory::GetItemInLoadout

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x56\x48\x83\xEC\x2A\x49\x63\xF0</pre></td><td><pre>48 8B C4 56 48 83 EC ? 49 63 F0</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x83\xFA</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 83 FA</pre></td></tr>
</table>

### CCSPlayerInventory::SendInventoryUpdateEvent

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x31\xC0\x83\x7F\x2A\x2A\x75\x2A\x48\x8B\x47\x2A\x48\x89\xC7</pre></td><td><pre>31 C0 83 7F ? ? 75 ? 48 8B 47 ? 48 89 C7</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x83\x79\x2A\x2A\x0F\x10\x49</pre></td><td><pre>83 79 ? ? 0F 10 49</pre></td></tr>
</table>

### CCSPlayerPawn::IsAbleToApplySpray

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x49\x89\xD6\x41\x55\x48\x8D\x95\x2A\x2A\x2A\x2A\x49\x89\xCD</pre></td><td><pre>55 48 89 E5 41 57 41 56 49 89 D6 41 55 48 8D 95 ? ? ? ? 49 89 CD</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x8B\xC4\x48\x89\x58\x2A\x48\x89\x70\x2A\x48\x89\x78\x2A\x55\x48\x8D\xA8\x2A\x2A\x2A\x2A\x48\x81\xEC\x2A\x2A\x2A\x2A\x4C\x89\x70</pre></td><td><pre>48 8B C4 48 89 58 ? 48 89 70 ? 48 89 78 ? 55 48 8D A8 ? ? ? ? 48 81 EC ? ? ? ? 4C 89 70</pre></td></tr>
</table>

### CCSPlayerPawn::SetModelFromLoadout

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\x8B\x8F\x2A\x2A\x2A\x2A\x83\xF9\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x8B\x35\x2A\x2A\x2A\x2A\x48\x85\xF6\x0F\x84\x2A\x2A\x2A\x2A\x83\xF9\x2A\x0F\x84\x2A\x2A\x2A\x2A\x0F\xB7\x87\x2A\x2A\x2A\x2A\x48\x89\xC2\x48\xC1\xEA\x2A\x83\xE2\x2A\x48\x8B\x14\xD6\x48\x85\xD2\x0F\x84\x2A\x2A\x2A\x2A\x25\x2A\x2A\x2A\x2A\x48\x6B\xC0\x2A\x48\x01\xD0\x3B\x48\x2A\x0F\x85\x2A\x2A\x2A\x2A\x4C\x8B\x28</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? 8B 8F ? ? ? ? 83 F9 ? 0F 84 ? ? ? ? 48 8B 35 ? ? ? ? 48 85 F6 0F 84 ? ? ? ? 83 F9 ? 0F 84 ? ? ? ? 0F B7 87 ? ? ? ? 48 89 C2 48 C1 EA ? 83 E2 ? 48 8B 14 D6 48 85 D2 0F 84 ? ? ? ? 25 ? ? ? ? 48 6B C0 ? 48 01 D0 3B 48 ? 0F 85 ? ? ? ? 4C 8B 28</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x56\x57\x41\x54\x48\x83\xEC\x2A\x48\x8B\xF9\x45\x33\xE4</pre></td><td><pre>40 56 57 41 54 48 83 EC ? 48 8B F9 45 33 E4</pre></td></tr>
</table>

### CCSPlayer_ItemServices::GiveNamedItem

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x81\xEC\x2A\x2A\x2A\x2A\x48\x89\xBD\x2A\x2A\x2A\x2A\x89\x95\x2A\x2A\x2A\x2A\x48\x89\x8D\x2A\x2A\x2A\x2A\x44\x89\x85</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 81 EC ? ? ? ? 48 89 BD ? ? ? ? 89 95 ? ? ? ? 48 89 8D ? ? ? ? 44 89 85</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x08\x48\x89\x74\x24\x10\x48\x89\x7C\x24\x20\x44\x89\x44\x24\x18</pre></td><td><pre>48 89 5C 24 08 48 89 74 24 10 48 89 7C 24 20 44 89 44 24 18</pre></td></tr>
</table>

### CChicken::InitPet

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x49\x89\xF5\x41\x54\x53\x48\x89\xFB\x48\x89\xF7\x48\x81\xEC</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 53 48 89 FB 48 89 F7 48 81 EC</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x40\x55\x56\x41\x56\x48\x83\xEC\x2A\x48\x8B\xE9\x4C\x8B\xF2</pre></td><td><pre>40 55 56 41 56 48 83 EC ? 48 8B E9 4C 8B F2</pre></td></tr>
</table>

### CEconItemSchema::GetItemDefinition

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x57\x48\x83\xEC\x2A\x48\x8B\xD9\x89\x54\x24</pre></td><td><pre>48 89 5C 24 ? 57 48 83 EC ? 48 8B D9 89 54 24</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x8B\x87\x2A\x2A\x2A\x2A\x49\x89\xFA\x41\x89\xD0\x85\xC0\x0F\x84\x2A\x2A\x2A\x2A\x41\x89\xF1\x55\x41\xC1\xE9\x2A\x48\x89\xE5\x41\x57\x45\x31\xFF\x41\x31\xF1\x41\x56\x45\x69\xC9\x2A\x2A\x2A\x2A\x41\x55\x41\x54\x53\x44\x89\xC8\xC1\xE8\x2A\x41\x31\xC1\x8B\xBF\x2A\x2A\x2A\x2A\x45\x69\xC9\x2A\x2A\x2A\x2A\x44\x89\xC8\xC1\xE8\x2A\x41\x31\xC1\x8D\x47\x2A\x44\x21\xC8\x41\xF7\x82\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x74\x2A\x4D\x8B\xBA\x2A\x2A\x2A\x2A\x48\x98\x41\x8B\x04\x87\x83\xF8\x2A\x0F\x84\x2A\x2A\x2A\x2A\x45\x8B\x9A\x2A\x2A\x2A\x2A\x41\xF7\xC3\x2A\x2A\x2A\x2A\x74\x2A\x49\x8B\x9A\x2A\x2A\x2A\x2A\xEB\x2A\x66\x2E\x0F\x1F\x84\x00\x2A\x2A\x2A\x2A\x8B\x41\x2A\x83\xF8\x2A\x0F\x84\x2A\x2A\x2A\x2A\x48\x63\xD0\x48\x8D\x0C\x52\x48\x8D\x0C\xCB\x3B\x31\x75\x2A\x0F\x1F\x44\x00\x2A\x85\xC0\x78\x2A\x41\x39\x82\x2A\x2A\x2A\x2A\x7E\x2A\x31\xC0\x41\x81\xE3\x2A\x2A\x2A\x2A\x74\x2A\x49\x8B\x82\x2A\x2A\x2A\x2A\x48\x8D\x14\x52\x48\x8D\x04\xD0\x83\x78\x2A\x2A\x7C\x2A\x48\x8B\x40\x2A\x5B\x41\x5C\x41\x5D\x41\x5E\x41\x5F\x5D\xC3\x0F\x1F\x40\x2A\x8B\x04\xCD\x2A\x2A\x2A\x2A\x83\xF8\x2A\x74\x2A\x48\x63\xD0\x48\x8D\x0C\x52\x3B\x34\xCD</pre></td><td><pre>8B 87 ? ? ? ? 49 89 FA 41 89 D0 85 C0 0F 84 ? ? ? ? 41 89 F1 55 41 C1 E9 ? 48 89 E5 41 57 45 31 FF 41 31 F1 41 56 45 69 C9 ? ? ? ? 41 55 41 54 53 44 89 C8 C1 E8 ? 41 31 C1 8B BF ? ? ? ? 45 69 C9 ? ? ? ? 44 89 C8 C1 E8 ? 41 31 C1 8D 47 ? 44 21 C8 41 F7 82 ? ? ? ? ? ? ? ? 74 ? 4D 8B BA ? ? ? ? 48 98 41 8B 04 87 83 F8 ? 0F 84 ? ? ? ? 45 8B 9A ? ? ? ? 41 F7 C3 ? ? ? ? 74 ? 49 8B 9A ? ? ? ? EB ? 66 2E 0F 1F 84 00 ? ? ? ? 8B 41 ? 83 F8 ? 0F 84 ? ? ? ? 48 63 D0 48 8D 0C 52 48 8D 0C CB 3B 31 75 ? 0F 1F 44 00 ? 85 C0 78 ? 41 39 82 ? ? ? ? 7E ? 31 C0 41 81 E3 ? ? ? ? 74 ? 49 8B 82 ? ? ? ? 48 8D 14 52 48 8D 04 D0 83 78 ? ? 7C ? 48 8B 40 ? 5B 41 5C 41 5D 41 5E 41 5F 5D C3 0F 1F 40 ? 8B 04 CD ? ? ? ? 83 F8 ? 74 ? 48 63 D0 48 8D 0C 52 3B 34 CD</pre></td></tr>
</table>

### CEconItemSchema::GetItemDefinitionByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x83\xEC\x2A\x80\xBF\x2A\x2A\x2A\x2A\x2A\x75</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 83 EC ? 80 BF ? ? ? ? ? 75</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x80\xB9</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 56 80 B9</pre></td></tr>
</table>

### CEconItemView::operator=

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x89\x5C\x24\x2A\x48\x89\x6C\x24\x2A\x48\x89\x74\x24\x2A\x48\x89\x7C\x24\x2A\x41\x56\x48\x83\xEC\x2A\x48\x8B\xF9\x48\x8B\xF2</pre></td><td><pre>48 89 5C 24 ? 48 89 6C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 41 56 48 83 EC ? 48 8B F9 48 8B F2</pre></td></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x49\x89\xF4\x53\x48\x89\xFB\x48\x83\xEC\x2A\x48\x8B\x7F\x2A\x48\x85\xFF\x74</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 49 89 F4 53 48 89 FB 48 83 EC ? 48 8B 7F ? 48 85 FF 74</pre></td></tr>
</table>

### CServerSideClientBase::ActivatePlayer

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>engine2</td><td><pre>\x55\x48\x89\xE5\x41\x57\x41\x56\x41\x55\x41\x54\x53\x48\x89\xFB\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8D\x3D</pre></td><td><pre>55 48 89 E5 41 57 41 56 41 55 41 54 53 48 89 FB 48 83 EC ? E8 ? ? ? ? 48 8D 3D</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>engine2</td><td><pre>\x40\x53\x48\x83\xEC\x2A\x48\x89\x6C\x24\x2A\x48\x8B\xD9\x48\x89\x74\x24\x2A\x48\x89\x7C\x24</pre></td><td><pre>40 53 48 83 EC ? 48 89 6C 24 ? 48 8B D9 48 89 74 24 ? 48 89 7C 24</pre></td></tr>
</table>

### GetItemSchema

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>CODE-Style</th><th>IDA-Style</th></tr>
<tr><td>✅</td><td>Linux</td><td>server</td><td><pre>\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x48\x8B\x40\x2A\xC3\x0F\x1F\x80\x2A\x2A\x2A\x2A\x55\xBF\x2A\x2A\x2A\x2A\x48\x89\xE5\x53\x48\x83\xEC\x2A\xE8\x2A\x2A\x2A\x2A\xBF\x2A\x2A\x2A\x2A\x48\x89\xC3\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\xC7\x43\x2A\x2A\x2A\x2A\x2A\x48\x89\x03\xE8\x2A\x2A\x2A\x2A\x48\x89\xC7\x48\x89\x45\x2A\xE8\x2A\x2A\x2A\x2A\x48\x8B\x45\x2A\x48\x8D\x15\x2A\x2A\x2A\x2A\x48\x89\x1D\x2A\x2A\x2A\x2A\x48\x89\x13\x48\x89\x43\x2A\x48\x8B\x5D\x2A\xC9\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x55</pre></td><td><pre>48 8B 05 ? ? ? ? 48 85 C0 74 ? 48 8B 40 ? C3 0F 1F 80 ? ? ? ? 55 BF ? ? ? ? 48 89 E5 53 48 83 EC ? E8 ? ? ? ? BF ? ? ? ? 48 89 C3 48 8D 05 ? ? ? ? 48 C7 43 ? ? ? ? ? 48 89 03 E8 ? ? ? ? 48 89 C7 48 89 45 ? E8 ? ? ? ? 48 8B 45 ? 48 8D 15 ? ? ? ? 48 89 1D ? ? ? ? 48 89 13 48 89 43 ? 48 8B 5D ? C9 C3 CC CC CC CC CC CC CC CC CC CC CC 55</pre></td></tr>
<tr><td>✅</td><td>Windows</td><td>server</td><td><pre>\x48\x83\xEC\x2A\x48\x8B\x05\x2A\x2A\x2A\x2A\x48\x85\xC0\x0F\x85\x2A\x2A\x2A\x2A\x48\x89\x5C\x24\x2A\xB9\x2A\x2A\x2A\x2A\x48\x89\x7C\x24\x2A\xE8\x2A\x2A\x2A\x2A\x33\xFF\x48\x8B\xD8\x48\x85\xC0\x74\x2A\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x7B\x2A\xB9\x2A\x2A\x2A\x2A\x48\x89\x03\xE8\x2A\x2A\x2A\x2A\x48\x85\xC0\x74\x2A\x48\x8B\xC8\xE8\x2A\x2A\x2A\x2A\x48\x8B\xF8\x48\x8D\x05\x2A\x2A\x2A\x2A\x48\x89\x7B\x2A\x48\x89\x03\x48\x8B\xC7\x48\x8B\x7C\x24\x2A\x48\x89\x1D\x2A\x2A\x2A\x2A\x48\x8B\x5C\x24\x2A\x48\x83\xC4\x2A\xC3\x48\x8B\x47\x2A\x48\x8B\x5C\x24\x2A\x48\x89\x3D\x2A\x2A\x2A\x2A\x48\x8B\x7C\x24\x2A\x48\x83\xC4\x2A\xC3\x48\x8B\x40\x2A\x48\x83\xC4\x2A\xC3\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\xCC\x48\x8B\x41</pre></td><td><pre>48 83 EC ? 48 8B 05 ? ? ? ? 48 85 C0 0F 85 ? ? ? ? 48 89 5C 24 ? B9 ? ? ? ? 48 89 7C 24 ? E8 ? ? ? ? 33 FF 48 8B D8 48 85 C0 74 ? 48 8D 05 ? ? ? ? 48 89 7B ? B9 ? ? ? ? 48 89 03 E8 ? ? ? ? 48 85 C0 74 ? 48 8B C8 E8 ? ? ? ? 48 8B F8 48 8D 05 ? ? ? ? 48 89 7B ? 48 89 03 48 8B C7 48 8B 7C 24 ? 48 89 1D ? ? ? ? 48 8B 5C 24 ? 48 83 C4 ? C3 48 8B 47 ? 48 8B 5C 24 ? 48 89 3D ? ? ? ? 48 8B 7C 24 ? 48 83 C4 ? C3 48 8B 40 ? 48 83 C4 ? C3 CC CC CC CC CC CC CC CC CC CC CC CC 48 8B 41</pre></td></tr>
</table>
