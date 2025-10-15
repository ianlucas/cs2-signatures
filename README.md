# CS2 Server Signatures Tracker

* **Last updated:** October 15, 2025 at 1:28:44 AM UTC
* **Manifests:** [8823131850246373323](https://steamdb.info/depot/2347771/history/?changeid=M:8823131850246373323), [1602756282803538628](https://steamdb.info/depot/2347773/history/?changeid=M:1602756282803538628), [8910996202863983657](https://steamdb.info/depot/2347770/history/?changeid=M:8910996202863983657)

<table>
<tr><th>Linux</th><th>Windows</th><th>Project</th><th></th></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/roflmuffin/CounterStrikeSharp">CounterStrikeSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CounterStrikeSharp.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/Source2ZE/CS2Fixes">CS2Fixes</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CS2Fixes.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftly">swiftly</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/swiftly.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftlys2">SwiftlyS2</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/SwiftlyS2.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/untrustedmodders/plugify-source-2">plugify</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/plugify.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/KZGlobalTeam/cs2kz-metamod">cs2kz-metamod</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2kz-metamod.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/yonilerner/cs2-retakes-allocator">cs2-retakes-allocator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-retakes-allocator.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-inventory-simulator-plugin">cs2-inventory-simulator-plugin</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-inventory-simulator-plugin.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-match-plugin">cs2-match-plugin</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-match-plugin.md">View signatures →</a></td></tr></table>

<details>
  <summary>CounterStrikeSharp broken signatures</summary>

* `❌Linux ❌Windows` GetCSWeaponDataFromKey
* `❌Linux ❌Windows` CBaseEntity_EmitSoundFilter
* `❌Linux ❌Windows` CBaseEntity_TakeDamageOld

</details>

<details>
  <summary>CS2Fixes broken signatures</summary>

* `❌Linux ❌Windows` CBaseEntity_TakeDamageOld
* `❌Linux ✅Windows` CNavMesh_GetNearestNavArea
* `✅Linux ❌Windows` CBaseEntity_EmitSoundParams
* `❌Linux ❌Windows` CBaseEntity_EmitSoundFilter
* `✅Linux ❌Windows` CTakeDamageInfo
* `❌Linux ❌Windows` CTriggerGravity_GravityTouch

</details>

<details>
  <summary>swiftly broken signatures</summary>

* `✅Linux ❌Windows` CTakeDamageInfo_Constructor
* `❌Linux ❌Windows` CBaseEntity_TakeDamage

</details>

<details>
  <summary>SwiftlyS2 broken signatures</summary>

* `✅Linux ❌Windows` CTakeDamageInfo::Constructor
* `❌Linux ❌Windows` CBaseEntity::TakeDamage
* `❌Linux ✅Windows` TracePlayerBBox

</details>

<details>
  <summary>plugify broken signatures</summary>

* `✅Linux ❌Windows` CCSServer::PointScriptEntityEnterScope
* `✅Linux ❌Windows` CCSScript::OnActivate
* `❌Linux ❌Windows` CBaseEntity::EmitSoundParams
* `✅Linux ❌Windows` CBaseEntity::EmitSoundFilter
* `✅Linux ❌Windows` GetCSWeaponDataFromKey

</details>

<details>
  <summary>cs2kz-metamod broken signatures</summary>

* `❌Linux ✅Windows` SnapViewAngles
* `❌Linux ✅Windows` TracePlayerBBox
* `❌Linux ✅Windows` PostThink
* `❌Linux ❌Windows` EmitSound

</details>

<details>
  <summary>cs2-retakes-allocator broken signatures</summary>

* `❌Linux ❌Windows` GetCSWeaponDataFromKey

</details>