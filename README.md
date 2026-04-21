# CS2 Server Signatures Tracker

* **Last updated:** April 21, 2026 at 12:00:48 AM GMT
* **Manifests:** [5046069333423020110](https://steamdb.info/depot/2347770/history/?changeid=M:5046069333423020110), [3075703127502321901](https://steamdb.info/depot/2347771/history/?changeid=M:3075703127502321901), [718727844179008805](https://steamdb.info/depot/2347773/history/?changeid=M:718727844179008805)

<table>
<tr><th>Linux</th><th>Windows</th><th>Project</th><th></th></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/roflmuffin/CounterStrikeSharp">CounterStrikeSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CounterStrikeSharp.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftlys2">SwiftlyS2</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/SwiftlyS2.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/Source2ZE/CS2Fixes">CS2Fixes</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CS2Fixes.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/Kxnrl/modsharp-public">ModSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/ModSharp.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/untrustedmodders/plugify-source-2">Plugify</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/Plugify.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-css-inventory-simulator">cs2-css-inventory-simulator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-css-inventory-simulator.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/KZGlobalTeam/cs2kz-metamod">cs2kz-metamod</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2kz-metamod.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/Micka2302/cs2-retakes-allocator-2.0">cs2-retakes-allocator-2.0</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-retakes-allocator-2.0.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-ss2-identity">cs2-ss2-identity</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-identity.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-ss2-inventory-simulator">cs2-ss2-inventory-simulator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-inventory-simulator.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-ss2-match">cs2-ss2-match</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-match.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-ss2-deathmatch">cs2-ss2-deathmatch</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-deathmatch.md">View signatures →</a></td></tr></table>

<details>
  <summary>CounterStrikeSharp broken signatures</summary>

* `❌Linux ❌Windows` CCSPlayerPawnBase_PostThink
* `❌Linux ❌Windows` CBaseModelEntity_SetModel
* `✅Linux ❌Windows` CCSPlayer_WeaponServices_CanUse
* `❌Linux ✅Windows` GetCSWeaponDataFromKey
* `❌Linux ✅Windows` CBaseEntity_DispatchSpawn
* `✅Linux ❌Windows` CBaseEntity_TakeDamageOld

</details>

<details>
  <summary>SwiftlyS2 broken signatures</summary>

* `❌Linux ❌Windows` CBaseModelEntity::SetModel
* `❌Linux ✅Windows` CBaseEntity::DispatchSpawn
* `❌Linux ❌Windows` CCSPlayerPawn::PostThink
* `✅Linux ❌Windows` CBaseEntity::TakeDamage
* `❌Linux ❌Windows` TracePlayerBBox
* `❌Linux ✅Windows` GetWeaponCSDataFromKey
* `❌Linux ✅Windows` DispatchParticleEffect
* `❌Linux ✅Windows` DispatchDatamapFunction

</details>

<details>
  <summary>CS2Fixes broken signatures</summary>

* `❌Linux ✅Windows` SetGroundEntity
* `❌Linux ❌Windows` ServerMovementUnlock
* `❌Linux ❌Windows` CheckJumpButtonWater
* `✅Linux ❌Windows` CBaseEntity_TakeDamageOld
* `❌Linux ✅Windows` CBaseEntity::SetGravityScale
* `❌Linux ❌Windows` CNavMesh_GetNearestNavArea
* `❌Linux ❌Windows` CBaseModelEntity_SetModel
* `✅Linux ❌Windows` CCSPlayer_WeaponServices_CanUse
* `❌Linux ✅Windows` DispatchSpawn
* `❌Linux ✅Windows` DispatchParticleEffect
* `❌Linux ✅Windows` CBaseEntity_SetMoveType
* `✅Linux ❌Windows` CPhysBox_Use
* `✅Linux ❌Windows` CBasePlayerPawn_GetEyePosition
* `❌Linux ✅Windows` GameSystem_Think_CheckSteamBan

</details>

<details>
  <summary>ModSharp broken signatures</summary>

* `✅Linux ❌Windows` IScriptVM::CreateVM
* `❌Linux ✅Windows` CBaseEntity::DispatchSpawn
* `✅Linux ❌Windows` CBaseEntity::DispatchTraceAttack
* `❌Linux ✅Windows` CBaseEntity::SetAbsAngles
* `❌Linux ❌Windows` CBaseEntity::SetAbsOrigin
* `❌Linux ✅Windows` CBaseEntity::SetGravityScale
* `❌Linux ✅Windows` CBaseEntity::SetGroundEntity
* `❌Linux ✅Windows` CBaseEntity::SetMoveType
* `❌Linux ✅Windows` CCSGameRules::CreateEndMatchMapGroupVoteOptions
* `✅Linux ❌Windows` CCSGameRules::RestartRound
* `❌Linux ❌Windows` CCSPlayer_MovementServices::TracePlayerBBox
* `❌Linux ⚠️Windows` CCSPlayer_MovementServices::WalkMove
* `❌Linux ✅Windows` CCSPlayer_WeaponServices::DetachWeapon
* `❌Linux ✅Windows` CEntityKeyValues::CEntityKeyValues
* `❌Linux ✅Windows` CGameEntitySystem::FindInSphere
* `✅Linux ❌Windows` CGamePhysicsQueryInterface::EntitiesAlongRay
* `❌Linux ❌Windows` CNavMesh::GetNearestNavArea
* `❌Linux ✅Windows` FindWeaponVDataByName
* `❌Linux ✅Windows` HandleGCBanInfo
* `❌Linux ✅Windows` KeyValues3::ReadArrayInt32
* `❌Linux ✅Windows` StateChanged
* `❌Linux ❌Windows` StudioModel::GetAttachment
* `❌Linux ✅Windows` UTIL_DispatchParticleEffectFilter_Attachment
* `❌Linux ❌Windows` UTIL_DispatchParticleEffectFilter_Position
* `❌Linux ✅Windows` UTIL_GetParticleSystemIndex
* `❌Linux ❌Windows` UTIL_SetModel

</details>

<details>
  <summary>Plugify broken signatures</summary>

* `❌Linux ✅Windows` CGameEntitySystem::DispatchSpawn
* `❌Linux ✅Windows` CBaseEntity::SetMoveType
* `❌Linux ✅Windows` GetCSWeaponDataFromKey
* `❌Linux ✅Windows` VScriptInitialization

</details>

<details>
  <summary>cs2-css-inventory-simulator broken signatures</summary>

* `❌Linux ✅Windows` CEconItemView::CEconItemView

</details>

<details>
  <summary>cs2kz-metamod broken signatures</summary>

* `❌Linux ✅Windows` SnapViewAngles
* `❌Linux ❌Windows` TracePlayerBBox
* `❌Linux ❌Windows` DebugDrawMesh
* `❌Linux ❌Windows` FullWalkMove
* `❌Linux ❌Windows` MoveInit
* `❌Linux ❌Windows` CheckWater
* `❌Linux ❌Windows` WaterMove
* `❌Linux ❌Windows` Duck
* `❌Linux ❌Windows` CanUnduck
* `✅Linux ❌Windows` LadderMove
* `❌Linux ❌Windows` OnJumpLegacy
* `❌Linux ❌Windows` AirMove
* `❌Linux ❌Windows` Friction
* `❌Linux ✅Windows` WalkMove
* `✅Linux ❌Windows` TryPlayerMove
* `⚠️Linux ❌Windows` CheckFalling
* `✅Linux ❌Windows` PostPlayerMove
* `❌Linux ❌Windows` PostThink
* `✅Linux ❌Windows` PhysicsSimulate
* `❌Linux ✅Windows` DispatchSpawn
* `❌Linux ❌Windows` SetModel
* `❌Linux ✅Windows` DecalTrace

</details>

<details>
  <summary>cs2-retakes-allocator-2.0 broken signatures</summary>

* `❌Linux ✅Windows` GetCSWeaponDataFromKey

</details>

<details>
  <summary>cs2-ss2-identity broken signatures</summary>

* `❌Linux ✅Windows` CCSPlayerController::m_iCompetitiveRanking1
* `❌Linux ✅Windows` CCSPlayerController::m_iCompetitiveRanking2

</details>