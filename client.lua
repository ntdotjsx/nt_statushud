local foodPercent, streesPercent = 0,0

Citizen.CreateThread(function()
    Citizen.Wait(0)
    while true do
        TriggerEvent("esx_status:getStatus", "hunger", function(food)
            foodPercent = food.getPercent()
        end)
        TriggerEvent("esx_status:getStatus", "stress", function(stress)
            stressPercent = stress.getPercent()
        end)
        Wait(2500)
    end
end)

AddEventHandler("nt_core:ClearMemoryCl", function()
	Citizen.CreateThread(function()
		local rdm = math.random(100, 2000)
		Wait(rdm)
		collectgarbage()
	end)
end)

Citizen.CreateThread(function()
    while true do
		Wait(100)

        Citizen.Wait(100)
        local playerId = PlayerId()
        local ped = GetPlayerPed(-1)

        SetPedMaxHealth(ped, 200)				-- Set max health peds
		SetPedMaxTimeUnderwater(ped, 10.00) 	-- Set the underwater time to all players
        SetPlayerHealthRechargeMultiplier(PlayerId(), 0.0)

        local playerHealth = GetEntityHealth(ped) - 100	
        local armor = GetPedArmour(ped)
        local IDA = GetPlayerServerId(PlayerId())
        local FirstName = GetPlayerName(playerId)
        
        local playerStamina = 100 - GetPlayerSprintStaminaRemaining(playerId)
        local playerDive = GetPlayerUnderwaterTimeRemaining(playerId) * 10.00	-- Value setpedmaxtimeunderwater multiply getplayerunderwatertimeremaining = 100

		
        SendNUIMessage({
            show = IsPauseMenuActive(),
            health = playerHealth,
            stamina = playerStamina,
            dive = playerDive,
            armor = armor,
            food = foodPercent,
            stress = stressPercent,
            fullname = FirstName,
            id = IDA
        })

		-- print(foodPercent,stressPercent)
    end
end)