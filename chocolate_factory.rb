puts 'Hi! Welcome to the Chocolate Factory Manufactoring and Sales Program'

milkBarProdCost = 2
darkBarProdCost = 3

milkBarSalePrice = 3
darkBarSalePrice = 5

milkBarSalesPrice = 

milkBarsProduced = Array.new
darkBarsProduced = Array.new

milkBarsSold = Array.new
darkBarsSold = Array.new



for i in 0..2
	puts "Enter Number of milk chocolate bars produced on day #{i+1}"
	milkBarsProduced.push(gets.strip)
	puts "Enter Number of dark chocolate bars produced on day #{i+1}"
	darkBarsProduced.push(gets.strip)
	puts "Enter Number of milk chocolate bars sold on day #{i+1}"
	milkBarsSold.push(gets.strip)
	puts "Enter Number of dark chocolate bars sold on day #{i+1}"
	darkBarsSold.push(gets.strip)
end

highestCost = 0
highestCostDay = 0

numberOfMilkBarsSold = Float::INFINITY   #change to max int
leastMilkBarSoldDay = 0

totalCost = 0
totalRevenue = 0;

revenueDiffBetweenDarkandMilk = 0



for i in 0..2
	milkBarSales = milkBarsSold[i].to_i * milkBarSalePrice
	darkBarSales = darkBarsSold[i].to_i * darkBarSalePrice

	milkBarCost = milkBarsProduced[i].to_i * milkBarProdCost
	darkBarCost = darkBarsProduced[i].to_i * darkBarProdCost

	revenue = milkBarSales + darkBarSales
	puts "Revenue for day #{i+1} is #{revenue}"

	cost =  milkBarCost + darkBarCost
	#puts "Cost for  day #{i+1} is #{cost}"

	profit = revenue - cost
	#puts "Profit for  day #{i+1} is #{profit}"

	if cost > highestCost
		highestCost = cost
		highestCostDay = i+1
	end

	if milkBarsSold[i].to_i < numberOfMilkBarsSold
		numberOfMilkBarsSold = milkBarsSold[i].to_i
		leastMilkBarSoldDay = i + 1
	end

	totalCost = totalCost + cost
	totalRevenue = totalRevenue + revenue

	diff = darkBarSales - milkBarSales

	revenueDiffBetweenDarkandMilk = revenueDiffBetweenDarkandMilk + diff

end

puts "Highest Cost Day is Day #{highestCostDay}"

puts "Least Milk Bar Sold Day is Day #{leastMilkBarSoldDay}"

totalProfit = totalRevenue - totalCost

averageProfit = totalProfit/3

puts "Average profit per day is #{averageProfit}"

puts "Total Production Cost for the week is #{totalCost}"

puts "Revenue Difference between Dark and Milk is  #{revenueDiffBetweenDarkandMilk}"

