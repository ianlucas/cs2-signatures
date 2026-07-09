# CS2 Server Signatures Tracker

* **Last updated:** July 9, 2026 at 12:41:33 AM GMT
* **Manifests:** [3583953281387649656](https://steamdb.info/depot/2347771/history/?changeid=M:3583953281387649656), [4726829370494514989](https://steamdb.info/depot/2347770/history/?changeid=M:4726829370494514989), [5404769359433308252](https://steamdb.info/depot/2347773/history/?changeid=M:5404769359433308252)

<table>
<tr><th>Linux</th><th>Windows</th><th>Project</th><th></th></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/roflmuffin/CounterStrikeSharp">CounterStrikeSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CounterStrikeSharp.md">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftlys2">SwiftlyS2</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/SwiftlyS2.md#master">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/swiftly-solution/swiftlys2">SwiftlyS2 (beta)</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/SwiftlyS2.md#beta">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/Source2ZE/CS2Fixes">CS2Fixes</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/CS2Fixes.md">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/Kxnrl/modsharp-public">ModSharp</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/ModSharp.md">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/untrustedmodders/plugify-source-2">Plugify</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/Plugify.md">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/KZGlobalTeam/cs2kz-metamod">cs2kz-metamod</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2kz-metamod.md">View signatures →</a></td></tr>
<tr><td>⚠️</td><td>✅</td><td><a href="https://github.com/Micka2302/cs2-retakes-allocator-2.0">cs2-retakes-allocator-2.0</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-retakes-allocator-2.0.md">View signatures →</a></td></tr>
<tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-css-inventory-simulator">cs2-css-inventory-simulator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-css-inventory-simulator.md">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/ianlucas/cs2-ss2-deathmatch">cs2-ss2-deathmatch</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-deathmatch.md">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/ianlucas/cs2-ss2-identity">cs2-ss2-identity</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-identity.md">View signatures →</a></td></tr>
<tr><td>✅</td><td>✅</td><td><a href="https://github.com/ianlucas/cs2-ss2-inventory-simulator">cs2-ss2-inventory-simulator</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-inventory-simulator.md">View signatures →</a></td></tr>
<tr><td>❌</td><td>❌</td><td><a href="https://github.com/ianlucas/cs2-ss2-match">cs2-ss2-match</a></td><td><a href="https://github.com/ianlucas/cs2-signatures/blob/main/.github/docs/cs2-ss2-match.md">View signatures →</a></td></tr>
</table>

<details>
<summary>CounterStrikeSharp broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>❌</td><td>CCSGameRules_TerminateRound</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayerPawnBase_PostThink</td></tr>
<tr><td>✅</td><td>❌</td><td>CCSPlayer_WeaponServices_CanUse</td></tr>
<tr><td>❌</td><td>✅</td><td>CEntityInstance_AcceptInput</td></tr>
<tr><td>❌</td><td>✅</td><td>CBaseEntity_TakeDamageOld</td></tr>
<tr><td>❌</td><td>✅</td><td>CheckTransmit</td></tr>
<tr><td>❌</td><td>✅</td><td>ClientPrint</td></tr>
<tr><td>❌</td><td>✅</td><td>Host_Say</td></tr>
<tr><td>✅</td><td>❌</td><td>LegacyGameEventListener</td></tr>
</table>

</details>

<details>
<summary>SwiftlyS2 broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>✅</td><td>Cmd_ExecuteCommand</td></tr>
<tr><td>❌</td><td>✅</td><td>INetworkMessageProcessingPreFilter::FilterMessage</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayerPawn::PostThink</td></tr>
<tr><td>❌</td><td>✅</td><td>CCSPlayer_MovementServices::CanUnduck</td></tr>
<tr><td>✅</td><td>❌</td><td>CCSPlayer_MovementServices::CategorizePosition</td></tr>
<tr><td>✅</td><td>❌</td><td>CCSPlayer_MovementServices::CheckVelocity</td></tr>
<tr><td>⚠️</td><td>❌</td><td>CCSPlayer_MovementServices::LadderMove</td></tr>
<tr><td>❌</td><td>⚠️</td><td>CCSPlayer_MovementServices::WalkMove</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayer_MovementServices::WaterMove</td></tr>
<tr><td>❌</td><td>✅</td><td>CDecoyProjectile::EmitGrenade</td></tr>
<tr><td>❌</td><td>❌</td><td>CEntityIdentity::AcceptInput</td></tr>
<tr><td>❌</td><td>✅</td><td>CEntityInstance::AcceptInput</td></tr>
<tr><td>❌</td><td>⚠️</td><td>CFlashbangProjectile::EmitGrenade</td></tr>
<tr><td>❌</td><td>❌</td><td>CGameRules::TerminateRound</td></tr>
<tr><td>❌</td><td>❌</td><td>CHEGrenadeProjectile::EmitGrenade</td></tr>
<tr><td>❌</td><td>❌</td><td>DispatchDatamapFunction</td></tr>
<tr><td>✅</td><td>❌</td><td>LegacyGameEventListener</td></tr>
<tr><td>❌</td><td>✅</td><td>SetSchemaHammerUniqueId</td></tr>
<tr><td>❌</td><td>❌</td><td>TracePlayerBBox</td></tr>
<tr><td>⚠️</td><td>❌</td><td>TraceShape</td></tr>
<tr><td>❌</td><td>✅</td><td>CBaseEntity::TakeDamage</td></tr>
</table>

</details>

<details>
<summary>SwiftlyS2 (beta) broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>✅</td><td>Cmd_ExecuteCommand</td></tr>
<tr><td>❌</td><td>✅</td><td>INetworkMessageProcessingPreFilter::FilterMessage</td></tr>
<tr><td>❌</td><td>✅</td><td>CBaseEntity::TakeDamage</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayerPawn::PostThink</td></tr>
<tr><td>❌</td><td>✅</td><td>CCSPlayer_MovementServices::CanUnduck</td></tr>
<tr><td>✅</td><td>❌</td><td>CCSPlayer_MovementServices::CheckVelocity</td></tr>
<tr><td>⚠️</td><td>❌</td><td>CCSPlayer_MovementServices::LadderMove</td></tr>
<tr><td>❌</td><td>⚠️</td><td>CCSPlayer_MovementServices::WalkMove</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayer_MovementServices::WaterMove</td></tr>
<tr><td>❌</td><td>✅</td><td>CDecoyProjectile::EmitGrenade</td></tr>
<tr><td>❌</td><td>❌</td><td>CEntityIdentity::AcceptInput</td></tr>
<tr><td>❌</td><td>✅</td><td>CEntityInstance::AcceptInput</td></tr>
<tr><td>❌</td><td>⚠️</td><td>CFlashbangProjectile::EmitGrenade</td></tr>
<tr><td>❌</td><td>❌</td><td>CGameRules::TerminateRound</td></tr>
<tr><td>❌</td><td>❌</td><td>CHEGrenadeProjectile::EmitGrenade</td></tr>
<tr><td>❌</td><td>❌</td><td>DispatchDatamapFunction</td></tr>
<tr><td>❌</td><td>❌</td><td>TracePlayerBBox</td></tr>
<tr><td>⚠️</td><td>❌</td><td>TraceShape</td></tr>
<tr><td>✅</td><td>❌</td><td>CCSPlayer_MovementServices::CategorizePosition</td></tr>
<tr><td>✅</td><td>❌</td><td>LegacyGameEventListener</td></tr>
<tr><td>❌</td><td>✅</td><td>SetSchemaHammerUniqueId</td></tr>
</table>

</details>

<details>
<summary>CS2Fixes broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>✅</td><td>CBaseEntity_TakeDamageOld</td></tr>
<tr><td>❌</td><td>✅</td><td>CBasePlayerPawn_GetEyeAngles</td></tr>
<tr><td>✅</td><td>❌</td><td>CBasePlayerPawn_GetEyePosition</td></tr>
<tr><td>❌</td><td>✅</td><td>CCSGameRules_GoToIntermission</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSGameRules__sm_mapGcBanInformation</td></tr>
<tr><td>✅</td><td>❌</td><td>CCSPlayer_WeaponServices_CanUse</td></tr>
<tr><td>❌</td><td>❌</td><td>CEntityIdentity_AcceptInput</td></tr>
<tr><td>❌</td><td>✅</td><td>CEntityInstance_AcceptInput</td></tr>
<tr><td>❌</td><td>❌</td><td>CGamePlayerEquip_InputTriggerForAllPlayers</td></tr>
<tr><td>❌</td><td>❌</td><td>CGameRules_TerminateRound</td></tr>
<tr><td>❌</td><td>❌</td><td>CNavMesh_GetNearestNavArea</td></tr>
<tr><td>❌</td><td>✅</td><td>FindUseEntity</td></tr>
<tr><td>❌</td><td>✅</td><td>GameSystem_Think_CheckSteamBan</td></tr>
<tr><td>❌</td><td>✅</td><td>SetSchemaHammerUniqueId</td></tr>
<tr><td>⚠️</td><td>❌</td><td>TraceShape</td></tr>
<tr><td>✅</td><td>❌</td><td>TriggerPush_Touch</td></tr>
<tr><td>❌</td><td>✅</td><td>GetFreeClient</td></tr>
<tr><td>❌</td><td>✅</td><td>IsHearingClient</td></tr>
</table>

</details>

<details>
<summary>ModSharp broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>✅</td><td>CNetworkGameServer::SpawnServer</td></tr>
<tr><td>❌</td><td>✅</td><td>HostStateRequest</td></tr>
<tr><td>❌</td><td>❌</td><td>Source2_Init</td></tr>
<tr><td>❌</td><td>❌</td><td>CBaseEntity::AbsAngles</td></tr>
<tr><td>❌</td><td>❌</td><td>CBaseEntity::AbsOrigin</td></tr>
<tr><td>❌</td><td>✅</td><td>CBaseEntity::AcceptInput</td></tr>
<tr><td>❌</td><td>❌</td><td>CBaseEntity::DispatchTraceAttack</td></tr>
<tr><td>❌</td><td>❌</td><td>CBaseModelEntity::GetBoneTransform</td></tr>
<tr><td>❌</td><td>✅</td><td>CBasePlayerController::HandleCommandJoinTeam</td></tr>
<tr><td>❌</td><td>✅</td><td>CBasePlayerController::SwitchSteam</td></tr>
<tr><td>❌</td><td>✅</td><td>CCSGameRules::CreateEndMatchMapGroupVoteOptions</td></tr>
<tr><td>✅</td><td>❌</td><td>CCSGameRules::PlayerCanHearChat</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSGameRules::TerminateRound</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSGameRules::WillTeamHaveRoomForPlayer</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayerPawn::SetDefaultGloves</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayer_MovementServices::TracePlayerBBox</td></tr>
<tr><td>✅</td><td>❌</td><td>CCollisionProperty::SetSolid</td></tr>
<tr><td>❌</td><td>❌</td><td>CEntityIdentity::AcceptInput</td></tr>
<tr><td>✅</td><td>❌</td><td>CGameEntitySystem::FindEntityClassByClassname</td></tr>
<tr><td>❌</td><td>❌</td><td>CGamePhysicsQueryInterface::EntitiesAlongRay</td></tr>
<tr><td>✅</td><td>❌</td><td>GetLegacyGameEventListener</td></tr>
<tr><td>❌</td><td>✅</td><td>HandleGCBanInfo</td></tr>
<tr><td>❌</td><td>✅</td><td>HostSay</td></tr>
<tr><td>✅</td><td>❌</td><td>KeyValues3::KeyValues3</td></tr>
<tr><td>❌</td><td>❌</td><td>ScriptSetConVarString</td></tr>
<tr><td>❌</td><td>✅</td><td>SoundOpGameSystem::StopSoundEventFilter</td></tr>
<tr><td>❌</td><td>❌</td><td>StateChanged</td></tr>
<tr><td>❌</td><td>❌</td><td>StudioModel::GetAttachment</td></tr>
<tr><td>❌</td><td>✅</td><td>CBaseEntity::LocalVelocity</td></tr>
<tr><td>❌</td><td>✅</td><td>CNetworkGameServer::GetFreeClient</td></tr>
<tr><td>❌</td><td>⚠️</td><td>CNetworkGameServer::PrintStatus</td></tr>
<tr><td>✅</td><td>❌</td><td>CBaseEntity::ApplyAbsVelocityImpulse</td></tr>
<tr><td>⚠️</td><td>❌</td><td>CGamePhysicsQueryInterface::TraceShape</td></tr>
<tr><td>❌</td><td>✅</td><td>CNavMesh::GetNearestNavArea</td></tr>
</table>

</details>

<details>
<summary>Plugify broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>✅</td><td>CHostStateMgr::StartNewRequest</td></tr>
<tr><td>❌</td><td>✅</td><td>CNetworkGameServer::ReplyConnection</td></tr>
<tr><td>❌</td><td>✅</td><td>CEntityInstance::AcceptInput</td></tr>
<tr><td>❌</td><td>❌</td><td>CGameRules::TerminateRound</td></tr>
<tr><td>❌</td><td>✅</td><td>CSScript::ResolveModule</td></tr>
<tr><td>✅</td><td>❌</td><td>LegacyGameEventListener</td></tr>
</table>

</details>

<details>
<summary>cs2kz-metamod broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>✅</td><td>CanUnduck</td></tr>
<tr><td>❌</td><td>✅</td><td>CategorizePosition</td></tr>
<tr><td>✅</td><td>❌</td><td>CheckVelocity</td></tr>
<tr><td>❌</td><td>✅</td><td>CreateBot</td></tr>
<tr><td>❌</td><td>✅</td><td>DebugDrawMesh</td></tr>
<tr><td>✅</td><td>❌</td><td>GetLegacyGameEventListener</td></tr>
<tr><td>⚠️</td><td>❌</td><td>LadderMove</td></tr>
<tr><td>❌</td><td>❌</td><td>PostThink</td></tr>
<tr><td>⚠️</td><td>❌</td><td>TraceShape</td></tr>
<tr><td>❌</td><td>⚠️</td><td>WalkMove</td></tr>
<tr><td>❌</td><td>❌</td><td>WaterMove</td></tr>
</table>

</details>

<details>
<summary>cs2-ss2-deathmatch broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>❌</td><td>RespawnSoundPatch</td></tr>
</table>

</details>

<details>
<summary>cs2-ss2-identity broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>✅</td><td>CCSPlayerController::m_iCompetitiveRanking1</td></tr>
<tr><td>❌</td><td>✅</td><td>CCSPlayerController::m_iCompetitiveRanking2</td></tr>
<tr><td>❌</td><td>❌</td><td>CCSPlayerController::m_iszPlayerName3</td></tr>
</table>

</details>

<details>
<summary>cs2-ss2-match broken signatures</summary>

<table>
<tr><th>Linux</th><th>Windows</th><th>Subroutine</th></tr>
<tr><td>❌</td><td>❌</td><td>CCSGameRules::HandleSwapTeams</td></tr>
</table>

</details>
