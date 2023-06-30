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
  "Your late model Kia Sorrento, idling obediently, lights on - some muted music wafts from a slightly ajar window. Your cellphone battery is too low to remove from the charger, the order of Uber Eats is on the passenger seat.",
  ["cellphone", "uber_eats"],
  false
);

const deliverance = new Room(
  "deliverance",
  "Use your freedom, nothing but the open road ahead of you, on to the next adventure!",
  ["freedom"],
  true
);

const dining = new Room(
  "dining room",
  "A formal dining room, not the kind for everyday eating, covered in periodicals and office supplies.",
  ["outdoor_life_magazine", "ink_pen"],
  false
);

const driveway = new Room(
  "driveway",
  "You look back at where you parked your car and hope you won't have to leave it idling too long.  You notice several cigarette butts in the gravel.",
  ["gravel", "cigarette_butts"],
  false
);

const foyer = new Room(
  "foyer",
  "The foyer, or antechamber, looks deserted. Only the sound of a distant television betrays the presence of other humans. There is a stair going up and a hall to your right, to your left a doorway to dark room. A directory lists the tenants and locations. A grandfather clock stands as a mute witness.",
  ["directory", "grandfather_clock"],
  true
);

const hall = new Room(
  "hallway",
  "A well lit hallway leading around the staircase that leads to the second floor, there is large landscape painting on the wall. There are closed doors leading off to the right while the hall makes a left hand turn into shadow...",
  ["painting"],
  false
);

const kitchen = new Room(
  "kitchen",
  "A lovely and well kept kitchen, nobody cooks here.  There is a microwava and refridgerator and several cabinets and drawers",
  ["fridge", "cabinet_under_sink", "microwave", "silverware_drawer"],
  false
);

const porch = new Room(
  "porch",
  "The area before the entrance could best be described as a sidewalk, on the door is a handwritten sign. --NO UNAUTHORIZED VISITORS-- That means you Carl. A keypad by the door awaits your input. There is a newspaper discarded by the wall.",
  ["keypad", "newspaper"],
  false
);

const second_floor = new Room(
  "second_floor",
  "At the top of the stairs you see a shadowy figure, with their grasping hand out-stretched. The figure emits a low, guttural growl it sounds like 'Cccccaaaaarrrrrllllll'...",
  [],
  true
);

const stairs = new Room(
  "stairs",
  "A grand wooden staircase, the steps are just slightly too tall, as if made for someone a little taller than you are.  There is a railing to your right and what looks like a skateboard halfway up.",
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

// -----------------------------------Global Variables------------------------------------------------------ //

var gameStatus = "pending";

let answer;

let passCode;
  
let doorPrompt = 'Please input PassCode and click "okay" to enter - click "cancel" to close';

let currentLocation = "car";

const welcomeMessage =
  "182 Main St- You are sitting in your car, parked on Main Street between Church and South Winooski. The streets are deserted, you see that there is a light on in a second floor window. You are meant to deliver the Uber Eats to someone at this address.";

const death = `The dead can not deliver food, your mission failed...   ___GaMe OvEr___`;

const creditCrawl = `___Made By DanKnox______2023___`;

export const gameDetails = {
  title: `Ask Not for Whom the Uber Eats, the Uber Eats for Thee`,
  desc: `${welcomeMessage}`,
  author: "Dan Knox",
  cohort: "SBPT-May-2023",
  startingRoomDescription: `${roomLookUp[currentLocation].what}`,
  playerCommands: [
    // replace these with your games commands as needed
    "drop",
    "inventory",
    "look",
    "move",
    "where",
    "quit",
    "use",
    "take",
  ],
  // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference.
  // This shouldn't be more than 6-8 different commands.
};

// Your code here

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
  true,
  "driveway"
);

const directory = new Item(
  "directory",
  "Many unoccupied offices, you see residential information for the 2nd floor.",
  true,
  false,
  "foyer"
);

const freedom = new Item(
  "freedom",
  "Indescribable ecstasy",
  true,
  false,
  "deliverance"
);

const fridge = new Item(
  "fridge",
  "You see some curdled milk and some takeout soy sauce packets.",
  true,
  false,
  "kitchen"
);

const grandfather_clock = new Item(
  "grandfather_clock",
  "This magnificent and ancient piece of technology shows signs of particular neglect.",
  false,
  false,
  "foyer"
);

const gravel = new Item(
  "gravel",
  "Small pieces of igneous rock.",
  false,
  true,
  "driveway"
);

const keypad = new Item(
  "keypad",
  "The door code keypad, typical 10 key numeric, you will need to input the right code to unlock the door.",
  true,
  false,
  "porch"
);

const ink_pen = new Item(
  "ink_pen",
  "A ballpoint clicker pen with the name of a local business on it, the pen is out of ink.",
  true,
  true,
  "dining"
);

const microwave = new Item(
  "microwave",
  "This microwave still smells pleasantly like popcorn.",
  true,
  false,
  "kitchen"
);

const newspaper = new Item(
  "newspaper",
  "Yesterday's free alternative weekly, the cover story is somehting about urban apiaries",
  false,
  true,
  "porch"
);

const outdoor_life_magazine = new Item(
  "outdoor_life_magazine",
  "The date of this magazine says June of 2011 - the main article has someting to do with bass fishing.",
  false,
  true,
  "dining"
);

const painting = new Item(
  "painting",
  "A reproduction of a famous painting of a boring scene.",
  true,
  false,
  "hallway"
);

const railing = new Item(
  "railing",
  "A strong wooden railing, this will allow you to safely ascend the staircase.",
  true,
  false,
  "stairs"
);

const silverware_drawer = new Item(
  "silverware_drawer",
  "Full of plastic utensils in plastic wrappers.",
  false,
  false,
  "kitchen"
);

const skateboard = new Item(
  "skateboard",
  "Despite its obvious overall wear, this skateboard's hubs look freshly greased. When this is on a stair it is a deadly hazard.",
  false,
  true,
  "stairs"
);

const uber_eats = new Item(
  "uber_eats",
  "A bag of late night grub for your hungry customer inside, the note on the ticket provides the entrance code: 93378.",
  false,
  true,
  "car"
);

// ------------------------------------PlayerCommands------------------------------------------------ //

let commands = {
  drop: ["d", "drop"],
  helpList: ["h", "help"],
  inventory: ["i", "inventory", "inv"],
  look: ["l", "look"],
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
  answer = playerInput;

  var parseAnswer = [];
  parseAnswer.push(answer.toLowerCase().split(" "));

  var words = parseAnswer[0];
  var word1 = words[0];
  var word2 = words[1];

  //if for drop
  if (commands.drop.includes(word1)) {
    let dropReturn = drop(word2);
    return dropReturn;

    //else if for Help!
    //current location & directions on how to use two word answers
  } else if (commands.helpList.includes(word1)) {
    let helpReturn = help();
    return helpReturn;

    //else if for inventory
  } else if (commands.inventory.includes(word1)) {
    let invReturn = inventory();
    return invReturn;

    // else if for look
  } else if (commands.look.includes(word1)) {
    let lookReturn = look(word2);
    return lookReturn;

    //else if for move
  } else if (commands.move.includes(word1)) {
    let moveReturn = move(word2);
    return moveReturn;

    //else if for possMoves
  } else if (commands.possibleMoves.includes(word1)) {
    let possReturn = possibleMoves();
    return possReturn;

    //else if for quit
  } else if (commands.quit.includes(word1)) {
    let quitReturn = quit();
    return quitReturn;

    //else if for take
  } else if (commands.take.includes(word1)) {
    let takeReturn = take(word2);
    return takeReturn;

    //else if for Teleport
  } else if (commands.teleport.includes(word1)) {
    let warpReturn = teleport(word2);
    return warpReturn;

    //else if for use
  } else if (commands.use.includes(word1)) {
    let useReturn = use(word2);
    return useReturn;

    //else for help
  } else {
    return `type "help" for assistance`;
  }
};
// Your code here

// -----------------------------------SplittingResponseInto2Words--------------------------------------------------- //

// --------------------------------------commandFunctions-------------------------------------------------- //

function drop(dropItem) {
  // Removing the specified element by value from the array
  if (player.inventory.includes(dropItem)) {
    for (var i = 0; i < player.inventory.length; i++) {
      if (player.inventory[i] === dropItem) {
        var spliced = player.inventory.splice(i, 1);
      }
      roomLookUp[currentLocation].Item.push(dropItem);
      itemLookUp[dropItem].place = currentLocation;
    }
    if (uber_eats.place == "second_floor") {
      deliverance.locked = false;
      return "The path to freedom is clear.";
    }
  } else {
 
    return `You can not drop ${dropItem} because it is not in your inventory.`;
  }
}

function help() {
  return `Please give your instructions in the following format: "word 1 = command" "word 2 = target of command". You are currently at ${currentLocation} -Type "where" to see some of your options.`;
}

function inventory() {
  return `Player Inventory: ${player.inventory}`;
}

//function to look at rooms & items
function look(objOfInt) {
  if (objOfInt == currentLocation) {
    if (roomLookUp[objOfInt]?.name.includes(objOfInt)) {
      return `${roomLookUp[objOfInt].what}`;
    }
  } else if (itemLookUp[objOfInt]?.name.includes(objOfInt)) {
    if (
      itemLookUp[objOfInt].place.includes(currentLocation) ||
      player.inventory.includes(objOfInt)
    ) {
      return `${itemLookUp[objOfInt].what}`;
    } else {
      return `${objOfInt} is not at ${currentLocation}.`;
    }
  } else {
    return `You can not see ${objOfInt} from ${currentLocation}`;
  }
}

//function to move between locations
function move(newLocation) {
  let possMoves = bldgMap[currentLocation];

  if (!possMoves.includes(newLocation)) {
    return `Unfortumantely, you can not go to ${newLocation} from ${currentLocation}`;
  }
  if (roomLookUp.foyer.name.includes(newLocation)) {
    if (foyer.locked === true) {
      return `The front door is locked, use keypad to enter.`;
    } else {
      currentLocation = newLocation;
      return `Moving to ${newLocation}... ${roomLookUp[currentLocation].what}`;
    }
  }
  if (roomLookUp[newLocation].locked === true) {
    return `You can not go to ${newLocation} from ${currentLocation} the way is blocked`;
  } else {
    currentLocation = newLocation;
    if (uber_eats.place !== "second_floor") {
      return `Moving to ${newLocation}... ${roomLookUp[currentLocation].what}`;
    } else {
      return `Moving to ${newLocation}... The path to freedom is clear.`;
    }
  }
}

//function to show possible moves and interactable objects
function possibleMoves() {
  let poss = (bldgMap[currentLocation]);
  let possItems = JSON.stringify(roomLookUp[currentLocation].Item);
  if (possItems !== false) {
    return `You are currently in ${currentLocation}. From here you can go to: ${JSON.stringify(poss)}. Around you, you see: ${possItems}.`;
  } else {
    return `You are currently in ${currentLocation}. From here you can go to: ${poss}.`;
  }
}
//function to add items to inventory and remove them from existing locations
function take(item2Add) {
  if (itemLookUp[item2Add]?.name.includes(item2Add)) {
    if (itemLookUp[item2Add].place.includes(currentLocation)) {
      if (itemLookUp[item2Add].inv === true) {
        if (uber_eats.place !== "second_floor") {
          deliverance.locked == true;
          player.inventory.push(item2Add);
          itemLookUp[item2Add].place = "inventory";
          // Removing the specified element by value from the array
          for (var i = 0; i < roomLookUp[currentLocation].Item.length; i++) {
            if (roomLookUp[currentLocation].Item[i] === item2Add) {
              var spliced = roomLookUp[currentLocation].Item.splice(i, 1);
            }
          }
          return `You add ${item2Add} to your inventory. THE UBER EATS MUST BE DELIVERED!`;
        } else {
          player.inventory.push(item2Add);
          itemLookUp[item2Add].place = "inventory";

          // Removing the specified element by value from the array
          for (var i = 0; i < roomLookUp[currentLocation].Item.length; i++) {
            if (roomLookUp[currentLocation].Item[i] === item2Add) {
              var spliced = roomLookUp[currentLocation].Item.splice(i, 1);
            }
            return `You add ${item2Add} to your inventory.`;
          }
        }
      } else {
        return `You can not pick up ${item2Add}.`;
      }
    } else {
      return `${item2Add} is not at ${currentLocation}.`;
    }
  } else {
    return `${item2Add} is not a valid choice.`;
  }
}

//teleport for debugging/testing
function teleport(newLocation) {
  if (roomLookUp[newLocation].name.includes(newLocation)) {
    currentLocation = newLocation;
    return `Moving to ${newLocation}... `;
  } else {
    return `Check your spelling ${newLocation} is not a valid location.`;
  }
}

// -------------------------------------UseItem--------------------------------------------------- //

function use(useItem) {
  if (
    roomLookUp[currentLocation].Item.includes(useItem) ||
    player.inventory.includes(useItem)
  ) {
    // For keypad entry
    if (itemLookUp.keypad.name.includes(useItem)) {
      let keypadStartReturn = keypadStart();
      return keypadStartReturn;

      //Use Item for other items
    } else if (itemLookUp[useItem]?.name.includes(useItem)) {
      if (itemLookUp[useItem].util === true) {
        if (useItem == "railing") {
          if (skateboard.place != "stairs") {
            currentLocation = "second_floor";
            return `You safely climb the stairs... ${roomLookUp[currentLocation].what} `;
          } else {
            gameStatus = "end";
            return `You have died after falling backward in a farcical display of ineptitude. The uber eats flung from your hand. ${death}`;
          }
        } else if (useItem == "freedom") {
          if (uber_eats.place == "second_floor") {
            gameStatus = "end";
            return `You have successfully completed your work shift!   ___Congratulations!___${creditCrawl}`;
          } else {
            return `What is Freedom when an Uber Eats customer goes Hungry?`;
          }
        }
      } else {
        return `Alas, ${useItem} is not useable at this time.`;
      }
    } else {
      return `Alas, ${useItem} is not something that can be used.`;
    }
  } else {
    return `You can not access ${useItem} from here now.`;
  }
}

// ------------------------------------PassCode----------------------------------------------------- //

function keypadStart() {
  if (foyer.locked == true) {
    passCode = prompt(doorPrompt, '*****');
 
    if (passCode === null) {
      return `${roomLookUp[currentLocation].what}`;
    }
    if (passCode !== "93378") {
    
      return "A disembodied voice drones: That code does not unlock the door.";
    } else {
      foyer.locked = false;
      return "A barely audible *click* and the heavy door creaks open.";
    }
  } else {
    return `The door is open, you do not need to use the keypad again.`;
  }
}

function quit() {
  return "Thanks for Playing";
}

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

// ----------------------------------Item LookUp Table------------------------------------------------------------ //

let itemLookUp = {
  cabinet_under_sink: cabinet_under_sink,
  cellphone: cellphone,
  cigarette_butts: cigarette_butts,
  directory: directory,
  freedom: freedom,
  fridge: fridge,
  grandfather_clock: grandfather_clock,
  gravel: gravel,
  ink_pen: ink_pen,
  keypad: keypad,
  microwave: microwave,
  newspaper: newspaper,
  outdoor_life_magazine: outdoor_life_magazine,
  painting: painting,
  railing: railing,
  silverware_drawer: silverware_drawer,
  skateboard: skateboard,
  uber_eats: uber_eats,
};
