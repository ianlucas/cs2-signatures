# CS2 Server Signatures Tracker

* **Last updated:** January 22, 2026 at 3:07:36 AM UTC
* **Manifests:** [6362784861484773478](https://steamdb.info/depot/2347770/history/?changeid=M:6362784861484773478), [1152241223114544985](https://steamdb.info/depot/2347771/history/?changeid=M:1152241223114544985), [2766739100351032354](https://steamdb.info/depot/2347773/history/?changeid=M:2766739100351032354)

<table>
<tr><th>Linux</th><th>Windows</th><th>Project</th><th></th></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/roflmuffin/CounterStrikeSharp">CounterStrikeSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CounterStrikeSharp.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/Source2ZE/CS2Fixes">CS2Fixes</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CS2Fixes.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftly">swiftly</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/swiftly.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftlys2">SwiftlyS2</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/SwiftlyS2.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/Kxnrl/modsharp-public">ModSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/ModSharp.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/untrustedmodders/plugify-source-2">plugify</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/plugify.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/KZGlobalTeam/cs2kz-metamod">cs2kz-metamod</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2kz-metamod.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/Micka2302/cs2-retakes-allocator-2.0">cs2-retakes-allocator-2.0</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-retakes-allocator-2.0.md">View signatures →</a></td></tr><tr><td>❌</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-ss2-identity">cs2-ss2-identity</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-identity.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-ss2-inventory-simulator">cs2-ss2-inventory-simulator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-inventory-simulator.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/ianlucas/cs2-ss2-match">cs2-ss2-match</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-match.md">View signatures →</a></td></tr><tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-css-inventory-simulator">cs2-css-inventory-simulator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-css-inventory-simulator.md">View signatures →</a></td></tr><tr><td>❌</td><td>❌</td><td><a href="https://github.com/ianlucas/cs2-css-match">cs2-css-match</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-css-match.md">View signatures →</a></td></tr></table>

<details>
  <summary>CounterStrikeSharp broken signatures</summary>

* `❌Linux ✅Windows` CBasePlayerController_SetPawn
* `❌Linux ✅Windows` CCSPlayerPawnBase_PostThink
* `❌Linux ✅Windows` GetCSWeaponDataFromKey
* `✅Linux ❌Windows` LegacyGameEventListener
* `❌Linux ✅Windows` CBaseEntity_TakeDamageOld

</details>

<details>
  <summary>CS2Fixes broken signatures</summary>

* `✅Linux ❌Windows` UTIL_SayTextFilter
* `❌Linux ❌Windows` UTIL_SayText2Filter
* `❌Linux ❌Windows` SetGroundEntity
* `❌Linux ❌Windows` ServerMovementUnlock
* `❌Linux ❌Windows` CheckJumpButtonWater
* `❌Linux ✅Windows` CBaseEntity_TakeDamageOld
* `✅Linux ❌Windows` CBaseEntity::SetGravityScale
* `❌Linux ✅Windows` CBasePlayerController_SetPawn
* `❌Linux ✅Windows` CNavMesh_GetNearestNavArea
* `❌Linux ✅Windows` ProcessMovement
* `❌Linux ✅Windows` CBaseEntity_SetMoveType
* `✅Linux ❌Windows` CPhysBox_Use
* `❌Linux ❌Windows` CTakeDamageInfo
* `✅Linux ❌Windows` TraceFunc
* `❌Linux ✅Windows` GameSystem_Think_CheckSteamBan

</details>

<details>
  <summary>swiftly broken signatures</summary>

* `✅Linux ❌Windows` LegacyGameEventListener
* `❌Linux ❌Windows` CTakeDamageInfo_Constructor
* `❌Linux ✅Windows` CBasePlayerController_SetPawn
* `❌Linux ✅Windows` CCSPlayerPawnBase_PostThink
* `❌Linux ✅Windows` CBaseEntity_TakeDamage

</details>

<details>
  <summary>SwiftlyS2 broken signatures</summary>

* `✅Linux ❌Windows` LegacyGameEventListener
* `❌Linux ❌Windows` CTakeDamageInfo::Constructor
* `❌Linux ✅Windows` CBasePlayerController::SetPawn
* `❌Linux ✅Windows` CCSPlayerPawn::PostThink
* `❌Linux ✅Windows` CBaseEntity::TakeDamage
* `❌Linux ❌Windows` TracePlayerBBox
* `❌Linux ✅Windows` GetWeaponCSDataFromKey
* `✅Linux ❌Windows` DispatchDatamapFunction

</details>

<details>
  <summary>ModSharp broken signatures</summary>

* `❌Linux ❌Windows` INetChannel::SendNetMessage
* `✅Linux ❌Windows` Source2_Init
* `✅Linux ❌Windows` CBaseEntity::AbsAngles
* `✅Linux ❌Windows` CBaseEntity::AbsOrigin
* `✅Linux ❌Windows` CBaseEntity::AbsVelocity
* `❌Linux ✅Windows` CBaseEntity::DispatchTraceAttack
* `❌Linux ❌Windows` CBaseEntity::LocalVelocity
* `✅Linux ❌Windows` CBaseEntity::SetAbsVelocity
* `✅Linux ❌Windows` CBaseEntity::SetGravityScale
* `❌Linux ✅Windows` CBaseEntity::SetGroundEntity
* `❌Linux ✅Windows` CBaseEntity::SetMoveType
* `✅Linux ❌Windows` CBaseModelEntity::GetBoneTransform
* `✅Linux ❌Windows` CBaseModelEntity::LookupBone
* `✅Linux ❌Windows` CBaseModelEntity::SetCollisionBounds
* `❌Linux ✅Windows` CBaseModelEntity::SetMaterialGroupMask
* `✅Linux ❌Windows` CBaseModelEntity::SetModelScale
* `❌Linux ✅Windows` CBasePlayerController::SetPawn
* `❌Linux ✅Windows` CCSGameRules::CreateEndMatchMapGroupVoteOptions
* `✅Linux ❌Windows` CCSPlayer_ItemServices::GiveGlove
* `✅Linux ❌Windows` CCSPlayer_MovementServices::Accelerate
* `❌Linux ❌Windows` CCSPlayer_MovementServices::ProcessMove
* `❌Linux ❌Windows` CCSPlayer_MovementServices::TracePlayerBBox
* `❌Linux ❌Windows` CCSPlayer_MovementServices::WalkMove
* `❌Linux ❌Windows` CCSPlayer_WeaponServices::CanEquip
* `❌Linux ✅Windows` CCSPlayer_WeaponServices::DetachWeapon
* `✅Linux ❌Windows` CCSPlayer_WeaponServices::EquipWeapon
* `❌Linux ✅Windows` CCSPlayer_WeaponServices::GetWeaponBySlot
* `✅Linux ❌Windows` CGameEntitySystem::AddListenerEntity
* `✅Linux ❌Windows` CGameEntitySystem::GetSpawnOriginOffset
* `❌Linux ✅Windows` CGameEntitySystem::RemoveListenerEntity
* `❌Linux ✅Windows` CGamePhysicsQueryInterface::EntitiesAlongRay
* `❌Linux ✅Windows` CNavMesh::GetNearestNavArea
* `✅Linux ❌Windows` CPlayer_MovementServices::RunCommand
* `❌Linux ✅Windows` FindWeaponVDataByName
* `✅Linux ❌Windows` GetLegacyGameEventListener
* `❌Linux ✅Windows` HandleGCBanInfo
* `✅Linux ❌Windows` SoundOpGameSystem::StartSoundEventString
* `✅Linux ❌Windows` StudioModel::LookupAttachment

</details>

<details>
  <summary>cs2kz-metamod broken signatures</summary>

* `❌Linux ✅Windows` CBasePlayerController_SetPawn
* `✅Linux ❌Windows` GetLegacyGameEventListener
* `❌Linux ❌Windows` TracePlayerBBox
* `❌Linux ❌Windows` SetupMove
* `❌Linux ✅Windows` ProcessMovement
* `❌Linux ❌Windows` PlayerMove
* `✅Linux ❌Windows` CheckParameters
* `❌Linux ❌Windows` MoveInit
* `✅Linux ❌Windows` CheckWater
* `✅Linux ❌Windows` WaterMove
* `❌Linux ❌Windows` CheckVelocity
* `✅Linux ❌Windows` Duck
* `❌Linux ❌Windows` CanUnduck
* `✅Linux ❌Windows` LadderMove
* `✅Linux ❌Windows` CheckJumpButton
* `❌Linux ❌Windows` OnJump
* `❌Linux ❌Windows` AirMove
* `❌Linux ✅Windows` AirAccelerate
* `❌Linux ❌Windows` Friction
* `❌Linux ❌Windows` WalkMove
* `✅Linux ❌Windows` TryPlayerMove
* `❌Linux ❌Windows` CategorizePosition
* `✅Linux ❌Windows` PostPlayerMove
* `❌Linux ✅Windows` PostThink

</details>

<details>
  <summary>cs2-retakes-allocator-2.0 broken signatures</summary>

* `❌Linux ✅Windows` GetCSWeaponDataFromKey

</details>

<details>
  <summary>cs2-ss2-identity broken signatures</summary>

* `❌Linux ✅Windows` CCSPlayerController::m_iCompetitiveRankingPatch
* `❌Linux ✅Windows` CCSPlayerController::m_iCompetitiveRankingCleanupPatch

</details>

<details>
  <summary>cs2-ss2-match broken signatures</summary>

* `❌Linux ❌Windows` CCSGameRules::IsLastRoundBeforeHalfTime

</details>

<details>
  <summary>cs2-css-match broken signatures</summary>

* `❌Linux ❌Windows` IsLastRoundBeforeHalfTime

</details>