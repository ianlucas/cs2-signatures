# CS2 Server Signatures Tracker

* **Last updated:** September 16, 2025 at 11:23:33 PM UTC
* **Manifests:** [2593784824065623681](https://steamdb.info/depot/2347771/history/?changeid=M:2593784824065623681), [6595264180991424075](https://steamdb.info/depot/2347773/history/?changeid=M:6595264180991424075), [3772023370191566732](https://steamdb.info/depot/2347770/history/?changeid=M:3772023370191566732)

<table>
<tr><th>Linux</th><th>Windows</th><th>Project</th><th></th></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/roflmuffin/CounterStrikeSharp">CounterStrikeSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CounterStrikeSharp.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/Source2ZE/CS2Fixes">CS2Fixes</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CS2Fixes.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftly">swiftly</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/swiftly.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/untrustedmodders/plugify-source-2">plugify</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/plugify.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/KZGlobalTeam/cs2kz-metamod">cs2kz-metamod</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2kz-metamod.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/yonilerner/cs2-retakes-allocator">cs2-retakes-allocator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-retakes-allocator.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/ianlucas/cs2-inventory-simulator-plugin">cs2-inventory-simulator-plugin</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-inventory-simulator-plugin.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-match-plugin">cs2-match-plugin</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-match-plugin.md">View signatures →</a></td></tr></table>

<details>
  <summary>CounterStrikeSharp broken signatures</summary>

* `❌Linux ✅Windows` CCSPlayerPawnBase_PostThink
* `❌Linux ✅Windows` GetCSWeaponDataFromKey
* `❌Linux ✅Windows` CBaseEntity_DispatchSpawn
* `❌Linux ✅Windows` CBaseTrigger_StartTouch
* `❌Linux ✅Windows` CheckTransmit

</details>

<details>
  <summary>CS2Fixes broken signatures</summary>

* `✅Linux ❌Windows` ServerMovementUnlock
* `❌Linux ✅Windows` CheckJumpButtonWater
* `❌Linux ✅Windows` CNavMesh_GetNearestNavArea
* `❌Linux ✅Windows` DispatchSpawn
* `❌Linux ✅Windows` FindUseEntity
* `❌Linux ✅Windows` TraceShape

</details>

<details>
  <summary>swiftly broken signatures</summary>

* `✅Linux ❌Windows` ServerMovementUnlock
* `❌Linux ✅Windows` CBaseEntity_DispatchSpawn
* `❌Linux ✅Windows` CCSPlayerPawnBase_PostThink

</details>

<details>
  <summary>plugify broken signatures</summary>

* `❌Linux ✅Windows` CCSPlayerController_SwitchTeam
* `❌Linux ✅Windows` DispatchSpawn
* `❌Linux ✅Windows` CBaseEntity_EmitSoundParams
* `❌Linux ✅Windows` GetCSWeaponDataFromKey

</details>

<details>
  <summary>cs2kz-metamod broken signatures</summary>

* `❌Linux ✅Windows` SnapViewAngles
* `❌Linux ❌Windows` TracePlayerBBox
* `❌Linux ✅Windows` TraceShape
* `❌Linux ❌Windows` DebugDrawMesh
* `❌Linux ✅Windows` ProcessMovement
* `✅Linux ❌Windows` PlayerMove
* `❌Linux ❌Windows` CheckWater
* `❌Linux ✅Windows` WaterMove
* `❌Linux ✅Windows` CheckVelocity
* `✅Linux ❌Windows` Duck
* `❌Linux ❌Windows` CanUnduck
* `✅Linux ❌Windows` LadderMove
* `❌Linux ✅Windows` OnJump
* `✅Linux ❌Windows` AirMove
* `✅Linux ❌Windows` Friction
* `❌Linux ❌Windows` WalkMove
* `❌Linux ✅Windows` PostThink
* `✅Linux ❌Windows` EmitSound
* `❌Linux ✅Windows` DispatchSpawn

</details>

<details>
  <summary>cs2-retakes-allocator broken signatures</summary>

* `❌Linux ✅Windows` GetCSWeaponDataFromKey

</details>

<details>
  <summary>cs2-inventory-simulator-plugin broken signatures</summary>

* `❌Linux ❌Windows` ChangeSubclass
* `✅Linux ❌Windows` CCSPlayerPawn_IsAbleToApplySpray

</details>