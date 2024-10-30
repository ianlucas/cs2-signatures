# cs2-inventory-simulator-plugin 

Last updated: October 30, 2024 at 12:17:04 AM UTC

* Repository: https://github.com/ianlucas/cs2-inventory-simulator-plugin
* Gamedata: https://github.com/ianlucas/cs2-inventory-simulator-plugin/blob/main/gamedata/inventory-simulator.json

## Signatures

### ChangeSubclass

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 6C 24 ? 56 48 83 EC ? 48 8B EA 48 8B F1 E8 ? ? ? ? 84 C0 0F 84
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 55 49 89 F5 41 54 49 89 FC 53 48 81 EC ? ? ? ? E8 ? ? ? ? 84 C0 74 ? 48 8D 05
</pre>
</td></tr></table>

### CAttributeList_SetOrAddAttributeValueByName

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 53 41 56 41 57 48 81 EC ? ? ? ? 0F 29 74 24
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 49 89 F4 53 48 83 EC ? F3 0F 11 85
</pre>
</td></tr></table>

### CBaseModelEntity_SetBodygroup

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 57 48 83 EC ? 41 8B F8 48 8B F2 48 8B D9 E8
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 56 49 89 F6 41 55 41 89 D5 41 54 49 89 FC 48 83 EC
</pre>
</td></tr></table>

### CCSPlayerPawn_IsAbleToApplySpray

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 89 5C 24 ? 48 89 74 24 ? 48 89 7C 24 ? 4C 89 74 24 ? 55 48 8D AC 24 ? ? ? ? 48 81 EC ? ? ? ? 49 8B F1
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 49 89 D5 41 54 48 8D 95
</pre>
</td></tr></table>

### CCSPlayerController_ProcessUsercmds

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B C4 44 88 48 20 44 89 40 18 48 89 50 10 53
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 41 89 D6 41 55 41 54 49 89 FC 53 48 83 EC 38
</pre>
</td></tr></table>

