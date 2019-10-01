puts 'Hi! Welcome to the Business Travellers Tracking program'

checkBagPrice = 50

ticketCost = Array.new
accomedationCost = Array.new
baggageCost = Array.new
totalCostPerTrip = Array.new
totalCost = 0;

for i in 0..2
puts ""
puts "Details for TRIP #{i+1}"
	puts "Enter Price for the Round trip ticket : "
	ticketCost.push(gets)
  puts "Enter Price for the Accomodations : "
	accomedationCost.push(gets)
  puts "Enter Number of Baggage Checked : "
  baggage = gets * checkBagPrice;
	baggageCost.push(baggage)
end

puts ""
#calculating the total cost for each trip
for j in 0..2
  cost = ticketCost[j].to_i + accomedationCost[j].to_i + baggageCost[j].to_i;
  puts "Total travel Expense for trip #{j+1} is #{cost}"
  totalCostPerTrip.push(cost)
end

puts ""
#saving and printing the totalCost
for je in 0..2
  totalCost = totalCostPerTrip[je].to_i + totalCost;
end

puts ""
puts "Total Cost for all the Trips is #{totalCost}"
puts ""
#to Calculate the percentage
for jj in 0..2
  percentage = (totalCostPerTrip[jj] * 100)/totalCost
  puts "The Percentage for Trip #{jj+1} is : #{percentage}%"
end

puts ""
for t in 0..2
ticketsCost = ticketsCost.to_i + ticketCost[t].to_i
accomedationsCost = accomedationsCost.to_i + accomedationCost[t].to_i
baggagesCost = baggagesCost.to_i + baggageCost[t].to_i
end

puts "Total Expense Spent on Travel tickets is: #{ticketsCost}"
puts "Total Expense Spent on Accomodations is: #{accomedationsCost}"
puts "Total Expense Spent on Baggages is: #{baggagesCost}"

max = totalCostPerTrip[0].to_i;
maxTrip = 0;

for k in 0..2
  if totalCostPerTrip[k]>max
     max = totalCostPerTrip[k]
      maxTrip = k;
  end
end     

puts ""
puts "The trip with highest expense is: #{maxTrip} with max value: #{max}"