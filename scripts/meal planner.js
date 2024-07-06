// Define meal plans for different dietary preferences
const mealPlans = {
    vegetarian: [
        {
            day: "Monday",
            meals: {
                breakfast: "250ml cup of milk tea, 1 egg, 4 slices of bread, 1 banana",
                lunch: "Ugali, Fish, slice of avocado,1 cupmof blended juice",
                dinner: "Stir-fried tofu with mixed vegetables and brown rice",
                snacks: [
                    "Greek yogurt with honey and almonds",
                    "Apple slices with almond butter"
                ]
            }
        },
        {
            day: "Tuesday",
            meals: {
                breakfast: "Avocado toast with poached eggs",
                lunch: "Caprese salad with mozzarella, tomatoes, and basil",
                dinner: "Vegetable stir-fry with tofu and brown rice",
                snacks: [
                    "Mixed nuts",
                    "Banana with peanut butter"
                ]
            }
        },
        {
            day: "Wednesday",
            meals: {
                breakfast: "Greek yogurt with berries and granola",
                lunch: "Mediterranean chickpea salad with feta cheese",
                dinner: "Vegetarian chili with cornbread",
                snacks: [
                    "Hummus with carrot sticks",
                    "Trail mix"
                ]
            }
        },
        {
            day: "Thursday",
            meals: {
                breakfast: "Spinach and feta cheese omelette",
                lunch: "Baked falafel wrap with tahini sauce",
                dinner: "Ratatouille with quinoa",
                snacks: [
                    "Cottage cheese with pineapple",
                    "Handful of almonds"
                ]
            }
        },
        {
            day: "Friday",
            meals: {
                breakfast: "Blueberry banana smoothie with spinach",
                lunch: "Veggie burger with avocado and sweet potato fries",
                dinner: "Vegetable lasagna with salad",
                snacks: [
                    "Apple slices with almond butter",
                    "Greek yogurt with honey and walnuts"
                ]
            }
        },
        {
            day: "Saturday",
            meals: {
                breakfast: "Whole grain pancakes with fresh berries",
                lunch: "Spinach and chickpea curry",
                dinner: "Stuffed bell peppers with quinoa and black beans",
                snacks: [
                    "Smoothie with kale, banana, and almond milk",
                    "Mixed nuts"
                ]
            }
        },
        {
            day: "Sunday",
            meals: {
                breakfast: "Oatmeal with mixed berries and chia seeds",
                lunch: "Vegetable sushi rolls with miso soup",
                dinner: "Vegetable pad thai with tofu",
                snacks: [
                    "Edamame beans",
                    "Banana with peanut butter"
                ]
            }
        }
    ],
    vegan: [
        {
            day: "Monday",
            meals: {
                breakfast: "Vegan smoothie bowl with berries and almond milk",
                lunch: "Chickpea and avocado wrap with spinach and hummus",
                dinner: "Vegetable curry with quinoa",
                snacks: [
                    "Mixed nuts",
                    "Carrot sticks with hummus"
                ]
            }
        },
        {
            day: "Tuesday",
            meals: {
                breakfast: "Chia seed pudding with coconut milk and fresh fruit",
                lunch: "Roasted vegetable and quinoa salad",
                dinner: "Lentil soup with crusty bread",
                snacks: [
                    "Fruit salad",
                    "Popcorn"
                ]
            }
        },
        {
            day: "Wednesday",
            meals: {
                breakfast: "Avocado toast with cherry tomatoes",
                lunch: "Stuffed bell peppers with quinoa and black beans",
                dinner: "Vegan spaghetti with marinara sauce",
                snacks: [
                    "Almond butter on rice cakes",
                    "Trail mix"
                ]
            }
        },
        {
            day: "Thursday",
            meals: {
                breakfast: "Smoothie with kale, banana, and almond milk",
                lunch: "Falafel salad with tahini dressing",
                dinner: "Coconut curry with tofu and vegetables",
                snacks: [
                    "Hummus with cucumber slices",
                    "Mixed nuts"
                ]
            }
        },
        {
            day: "Friday",
            meals: {
                breakfast: "Vegan pancakes with maple syrup",
                lunch: "Quinoa and black bean burgers",
                dinner: "Vegetable stir-fry with tofu",
                snacks: [
                    "Fruit smoothie",
                    "Raw veggies with guacamole"
                ]
            }
        },
        {
            day: "Saturday",
            meals: {
                breakfast: "Smoothie bowl with granola and fresh fruit",
                lunch: "Chickpea and spinach curry",
                dinner: "Vegan tacos with refried beans and salsa",
                snacks: [
                    "Rice cakes with almond butter",
                    "Fruit salad"
                ]
            }
        },
        {
            day: "Sunday",
            meals: {
                breakfast: "Oatmeal with almond milk and berries",
                lunch: "Vegan sushi rolls with miso soup",
                dinner: "Stuffed portobello mushrooms with quinoa and vegetables",
                snacks: [
                    "Mixed nuts",
                    "Energy balls"
                ]
            }
        }
    ],
    paleo: [
        {
            day: "Monday",
            meals: {
                breakfast: "Scrambled eggs with spinach and sweet potato hash",
                lunch: "Grilled chicken salad with mixed greens and balsamic vinaigrette",
                dinner: "Baked salmon with asparagus and roasted sweet potatoes",
                snacks: [
                    "Berries with coconut flakes",
                    "Beef jerky"
                ]
            }
        },
        {
            day: "Tuesday",
            meals: {
                breakfast: "Paleo banana pancakes with almond butter",
                lunch: "Turkey lettuce wraps with avocado and salsa",
                dinner: "Grilled shrimp with roasted vegetables",
                snacks: [
                    "Hard-boiled eggs",
                    "Mixed nuts"
                ]
            }
        },
        {
            day: "Wednesday",
            meals: {
                breakfast: "Paleo smoothie with coconut milk and berries",
                lunch: "Beef and vegetable stir-fry",
                dinner: "Chicken and vegetable kebabs",
                snacks: [
                    "Apple slices with almond butter",
                    "Jerky sticks"
                ]
            }
        },
        {
            day: "Thursday",
            meals: {
                breakfast: "Sweet potato and sausage hash",
                lunch: "Chicken avocado salad with lemon vinaigrette",
                dinner: "Grilled lamb chops with roasted vegetables",
                snacks: [
                    "Trail mix",
                    "Paleo energy bars"
                ]
            }
        },
        {
            day: "Friday",
            meals: {
                breakfast: "Paleo bacon and eggs",
                lunch: "Salmon salad with mixed greens and avocado",
                dinner: "Pork tenderloin with roasted Brussels sprouts",
                snacks: [
                    "Carrot sticks with guacamole",
                    "Mixed nuts"
                ]
            }
        },
        {
            day: "Saturday",
            meals: {
                breakfast: "Vegetable omelette with avocado",
                lunch: "Beef and broccoli stir-fry",
                dinner: "Grilled chicken with sweet potato fries",
                snacks: [
                    "Mixed berries with coconut flakes",
                    "Beef jerky"
                ]
            }
        },
        {
            day: "Sunday",
            meals: {
                breakfast: "Scrambled eggs with smoked salmon",
                lunch: "Turkey and vegetable skewers",
                dinner: "Baked cod with lemon and herbs",
                snacks: [
                    "Paleo trail mix",
                    "Apple slices with almond butter"
                ]
            }
        }
    ]
};

let dietType = 'vegetarian'; // Default dietary preference
let currentDayIndex = 0; // Default to Monday

// Function to display the meal plan for a specific day
function displayMealPlan(dayIndex, dietType) {
    const mealPlanSection = document.getElementById('mealPlan');
    mealPlanSection.innerHTML = ''; // Clear previous entries

    const meals = mealPlans[dietType][dayIndex].meals;

    // Display meals for breakfast, lunch, dinner, and snacks
    ['breakfast', 'lunch', 'dinner', 'snacks'].forEach((mealType) => {
        const mealItem = document.createElement('div');
        mealItem.classList.add('meal-item');
        mealItem.innerHTML = `<strong>${mealType.charAt(0).toUpperCase() + mealType.slice(1)}:</strong> ${Array.isArray(meals[mealType]) ? meals[mealType].join(', ') : meals[mealType]}`;
        mealPlanSection.appendChild(mealItem);
    });

    mealPlanSection.children[0].classList.add('active');
}

// Function to change the displayed day
function changeDay(delta) {
    currentDayIndex += delta;
    if (currentDayIndex < 0) {
        currentDayIndex = 0;
    } else if (currentDayIndex >= mealPlans[dietType].length) {
        currentDayIndex = mealPlans[dietType].length - 1;
    }
    document.getElementById('currentDay').textContent = `${mealPlans[dietType][currentDayIndex].day}`;
    displayMealPlan(currentDayIndex, dietType);
}

// Initialize the meal planner with the default settings
document.getElementById('dietType').addEventListener('change', function() {
    dietType = this.value;
    currentDayIndex = 0; // Reset to Monday when changing dietary preference
    document.getElementById('currentDay').textContent = `${mealPlans[dietType][currentDayIndex].day}`;
    displayMealPlan(currentDayIndex, dietType);
});

// Display the initial meal plan on page load
document.getElementById('currentDay').textContent = `${mealPlans[dietType][currentDayIndex].day}`;
displayMealPlan(currentDayIndex, dietType);

// Event listeners for navigation buttons
document.getElementById('prevDay').addEventListener('click', function() {
    changeDay(-1);
});

document.getElementById('nextDay').addEventListener('click', function() {
    changeDay(1);
});
