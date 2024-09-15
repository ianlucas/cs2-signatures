# cs2-inventory-simulator-plugin 

Last updated: 2024-09-15T11:08:32.327Z

## Signatures

Repository: https://github.com/ianlucas/cs2-inventory-simulator-plugin

### ChangeSubclass

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
40 57 48 83 EC ? 48 8B F9 41 B0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
55 48 89 E5 41 57 41 56 49 89 FE 41 55 41 54 45 31 E4 53 48 81 EC ? ? ? ? 48 85 F6 74 ? 80 3E ? 49 89 F5 75 ? 48 81 C4 ? ? ? ? 44 89 E6 4C 89 F7 5B 41 5C 41 5D 41 5E 41 5F 5D E9 ? ? ? ? 0F 1F 44 00 ? 4C 8D BD ? ? ? ? 48 89 F7 E8 ? ? ? ? 45 31 C0 4C 89 EA 31 F6 49 89 C4 4C 89 FF 89 C3 48 C7 85 ? ? ? ? ? ? ? ? 48 B8 ? ? ? ? ? ? ? ? 44 89 E1 48 89 85 ? ? ? ? E8 ? ? ? ? 31 F6 4C 89 FF E8 ? ? ? ? 48 8D 8D ? ? ? ? F6 85 ? ? ? ? ? 75 ? F7 85 ? ? ? ? ? ? ? ? 48 8D 0D ? ? ? ? 48 0F 45 8D ? ? ? ? 44 89 E2 81 F2 ? ? ? ? 41 83 FC ? 0F 8E ? ? ? ? 41 83 EC ? 45 89 E0 41 C1 E8 ? 41 8D 40 ? 48 8D 3C 81 0F 1F 40 ? 69 01 ? ? ? ? 48 83 C1 ? 69 D2 ? ? ? ? 89 C6 C1 EE ? 31 F0 69 C0 ? ? ? ? 31 C2 48 39 F9 75 ? 41 F7 D8 43 8D 1C 84 83 FB ? 74 ? 83 FB ? 74 ? 83 FB ? 74 ? 41 89 D4 89 D0 31 F6 41 C1 EC ? 4C 89 FF 44 31 E0 44 69 E0 ? ? ? ? 44 89 E2 C1 EA ? 41 31 D4 E8 ? ? ? ? 48 8B 05 ? ? ? ? 80 38 ? 0F 84 ? ? ? ? B9 ? ? ? ? 31 D2 4C 89 EE 44 89 E7 E8 ? ? ? ? E9 ? ? ? ? 90 0F B6 47 ? C1 E0 ? 31 C2 0F B6 47 ? C1 E0 ? 31 C2 0F B6 07 31 D0 69 D0 ? ? ? ? EB ? 90 48 89 CF E9 ? ? ? ? 0F 1F 84 00 ? ? ? ? 48 8B 87
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

### Trace

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
4C 8B DC 49 89 5B ? 49 89 6B ? 49 89 73 ? 57 41 56 41 57 48 81 EC ? ? ? ? 0F 57 C0
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 B8 ? ? ? ? ? ? ? ? 55 48 89 E5 41 57 41 56 49 89 D6 41 55
</pre>
</td></tr></table>

### GameTraceManager

<table>
<tr><th>Status</th><th>Platform</th><th>Library</th><th>SM-Style</th><th>IDA-Style</th></tr><tr><td>✅</td><td>Windows</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8B 0D ? ? ? ? 48 8D 45 ? 48 89 44 24 ? 4C 8D 44 24 ? C7 44 24 ? ? ? ? ? 48 8D 54 24 ? 4C 8B CB
</pre>
</td></tr><tr><td>✅</td><td>Linux</td><td>server</td><td>
<pre>
N/A
</pre>
</td><td>
<pre>
48 8D 05 ? ? ? ? F3 0F 58 8D ? ? ? ? 31 FF
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

