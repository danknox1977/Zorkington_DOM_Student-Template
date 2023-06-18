/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: `Ask Not for Whom the Uber Eats, the Uber Eats for Thee`,
    desc: '182 Main St- You are sitting in your car, parked on Main Street between Church and South Winooski. The streets are deserted, you see that there is a light on in a second floor window. You are meant to deliver the Uber Eats to someone at this address.',
    author: 'Dan Knox',
    cohort: 'SBPT-May-2023',
    startingRoomDescription: 'What you see before you is...',
    playerCommands: [
        // replace these with your games commands as needed
        'drop', 'inventory', 'look', 'move', 'where', 'quit', 'use', 'take'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here
// ---------------------------------GameFiles--------------------------------------------------- //
var gameStatus = "pending";

let currentLocation = "car";

const welcomeMessage = `182 Main St.
You are sitting in your car, parked on Main Street between Church and South Winooski.\nThe streets are deserted, you see that there is a light on in a second floor window. \nYou are meant to deliver the Uber Eats to someone at this address.`;

const prompt = `What do you do? >_`;

const death = `The dead can not deliver food, your mission failed...\n   ___GaMe OvEr___`;

const creditCrawl = `\n\n\n\n\n\n\n\n\n\n\n\n\n\n   ___Made By DanKnox___\n       ___2023___\n\n\n\n\n\n\n\n`;

// -------------------------------------MovementStateMachine------------------------------------------------ //

const bldgMap = {
    car: ["driveway", "deliverance"],
    deliverance: ["car"],
    dining: ["foyer", "kitchen"],
    driveway: ["porch", "car"],
    foyer: ["porch", "hall", "stairs", "dining"],
    hall: ["foyer", "kitchen"],
    kitchen: ["dining", "hall"],
    porch: ["driveway", "foyer"],
    second_floor: ["stairs"],
    stairs: ["foyer", "second_floor"],
  };

// ---------------------------------Room Classes--------------------------------------------------- //

//Room Class
class Room {
    constructor(name, what, Item, locked) {
      this.name = name;
      this.what = what;
      this.Item = Item;
      this.locked = locked;
    }
  }
  
  const car = new Room(
    "car",
    "A late model Kia Sorrento, idling obediently, lights on -with some muted music wafting \nfrom a slightly ajar window. Your cellphone battery is too low to remove from the charger,\nThe order of Uber Eats is on the passenger seat.",
    ["cellphone", "uber_eats"],
    false
  );
  
  const deliverance = new Room(
    "deliverance",
    "Freedom, the open road, on to the next adventure!",
    ["freedom"],
    true
  );
  
  const dining = new Room(
    "dining room",
    "A formal dining room, not the kind for everyday eating, covered in periodicals \nand office supplies.",
    ["outdoor_life_magazine", "ink_pen"],
    false
  );
  
  const driveway = new Room(
    "driveway",
    "You look back at where you parked your car and hope you won't have to leave it \nidling too long.  You notice several cigarette butts in the gravel.",
    ["gravel", "cigarette_butts"],
    false
  );
  
  const foyer = new Room(
    "foyer",
    "Or, antechamber, looks deserted only the sound of a distant television betrays the\npresence of other humans. There is a stair going up and a hall to your right.\nA directory lists the tenants and locations.",
    ["directory"],
    true
  );
  
  const hall = new Room(
    "hallway",
    "A well lit hallway leading around the staircase that leads to the second floor, there\n is large landscape painting on the wall.\nThere are doors closed doors leading off to the right while the hall \nmakes a left hand turn\n into shadows...",
    ["painting"],
    false
  );
  
  const kitchen = new Room(
    "kitchen",
    "A lovely and well kept kitchen, nobody cooks here.  There is a microwava and refridgerator\nand several cabinets and drawers",
    ["fridge", "cabinet_under_sink", "microwave", "silverware_drawer"],
    false
  );
  
  const porch = new Room(
    "porch",
    "The area before the entrance could best be described as a sidewalk, \nOn the door is a handwritten sign. \n--NO UNAUTHORIZED VISITORS-- That means you Carl\nA keypad by the door awaits your input.",
    ["keypad"],
    false
  );
  
  const second_floor = new Room(
    "second_floor",
    "At the top of the stairs you see a shadowy figure, with their grasping hand out-stretched.\nThe figure emits a low, guttural growl it sounds like \'Cccccaaaaarrrrrllllll\'...",
    [],
    true
  );
  
  const stairs = new Room(
    "stairs",
    "A grand wooden staircase, the steps are just slightly too tall, as if made for \nsomeone a little taller than you are.  There is a railing to your \nright and what looks like a skateboard halfway up.",
    ["railing", "skateboard"],
    false
  );

  // -----------------------------------room/LookUpTable------------------------------------------------------ //

let roomLookUp = {
    car: car,
    deliverance: deliverance,
    dining: dining,
    driveway: driveway,
    foyer: foyer,
    hall: hall,
    kitchen: kitchen,
    porch: porch,
    second_floor: second_floor,
    stairs: stairs,
  };

 // -------------------------------------Item ClassDeclaration-------------------------------------------------- //

class Item {
    constructor(name, what, util, inv, place) {
      this.name = name;
      this.what = what;
      this.util = util;
      this.inv = inv;
      this.place = place;
    }
  }
  
  const cabinet_under_sink = new Item(
    "cabinet_under_sink",
    "Sparsely filled with cleaning prodcuts and a small wastebasket.",
    false,
    false,
    "kitchen"
  );
  
  const cellphone = new Item(
    "cellphone",
    "Your cellphone, battery at an abysmmal 1%, will only function when\nplugged into your car charger.",
    false,
    false,
    "car"
  );
  
  const cigarette_butts = new Item(
    "cigarette_butts",
    "Assorted brands, someone who lives nearby enjoys the occasional trip to flavour country.",
    false,
    false,
    "driveway"
  );
  
  const directory = new Item("directory", "Many unoccupied offices, you see residential information for the 2nd floor.", true, false, "foyer");
  
  const freedom = new Item(
    "freedom",
    "Indescribable ecstasy",
    true,
    false,
    "deliverance"
  );
  
  const fridge = new Item("fridge", "You see some curdled milk and some takeout soy sauce packets.", true, false, "kitchen");
  
  const gravel = new Item("gravel", "Small pieces of igneous rock.", false, false, "driveway");
  
  const keypad = new Item(
    "keypad",
    "The door code keypad, typical 10 key numeric, you will need to input the right \ncode to unlock the door.",
    true,
    false,
    "porch"
  );
  
  const ink_pen = new Item("ink_pen", "A ballpoint clicker pen with the name of a local business on it, the pen is out of ink.", true, true, "dining");
  
  const microwave = new Item("microwave", "This microwave still smells pleasantly like popcorn.", true, false, "kitchen");
  
  const outdoor_life_magazine = new Item(
    "outdoor_life_magazine",
    "The date of this magazine says June of 2011 - the main article has someting to do with bass fishing.",
    true,
    false,
    "dining"
  );
  
  const painting = new Item("painting", "A reproduction of a famous painting of a boring scene.", true, false, "hallway");
  
  const railing = new Item(
    "railing",
    "A strong wooden railing, this will allow you to safely ascend the staircase.",
    true,
    false,
    "stairs"
  );
  
  const silverware_drawer = new Item(
    "silerverware_drawer",
    "Full of plastic utensils in plastic wrappers.",
    false,
    false,
    "kitchen"
  );
  
  const skateboard = new Item(
    "skateboard",
    "Despite its obvious overall wear, this skateboard's hubs look freshly greased.\nWhen this is on a stair it is a deadly hazard.",
    false,
    true,
    "stairs"
  );
  
  const uber_eats = new Item(
    "uber_eats",
    "A bag of late night grub for your hungry customer inside, the note on the ticket provides\nthe entrance code: 93378.",
    false,
    true,
    "car"
  );

// ----------------------------------Item LookUp Table------------------------------------------------------------ //

let itemLookUp = {
    cabinet_under_sink: cabinet_under_sink,
    cellphone: cellphone,
    cigarette_butts: cigarette_butts,
    directory: directory,
    freedom: freedom,
    fridge: fridge,
    gravel: gravel,
    ink_pen: ink_pen,
    keypad: keypad,
    microwave: microwave,
    outdoor_life_magazine: outdoor_life_magazine,
    painting: painting,
    railing: railing,
    silverware_drawer: silverware_drawer,
    skateboard: skateboard,
    uber_eats: uber_eats,
  };

// ------------------------------------PlayerCommands------------------------------------------------ //

let commands = {
    drop: ["d", "drop"],
    helpList: ["h", "help"],
    inventory: ["i", "inventory", "inv"],
    look: ["l", "look"],
    menu: ["m", "menu"],
    move: ["m", "move"],
    possibleMoves: ["w", "where", "what"],
    quit: ["x", "q", "exit", "end", "quit"],
    use: ["u", "use"],
    take: ["t", "take"],
    teleport: ["warp"],
  };
  
  // ---------------------------------------InventoryAndPlayer----------------------------------------------- //
  
  let player = {
    inventory: [],
  };

export const domDisplay = (playerInput) => {
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
