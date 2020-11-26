function shuffleArray (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* main function */
$(document).ready(function () {
  // filename array
  let files = ["banjo_and_kazooie.svg", "bayonetta.svg", "bowser.svg", "bowser_jr.svg", "byleth.svg",
  "captain_falcon.svg", "chrom.svg", "cloud.svg", "corrin.svg", "daisy.svg", "dark_pit.svg", "dark_samus.svg",
  "diddy_kong.svg", "donkey_kong.svg", "dq_hero.svg", "dr_mario.svg", "duck_hunt.svg", "falco.svg", "fox.svg",
  "ganondorf.svg", "greninja.svg", "ice_climbers.svg", "ike.svg", "incineroar.svg", "inkling.svg", "isabelle.svg",
  "jigglypuff.svg", "joker.svg", "ken.svg", "king_dedede.svg", "king_k_rool.svg", "kirby.svg", "link.svg",
  "little_mac.svg", "lucario.svg", "lucas.svg", "lucina.svg", "luigi.svg", "mario.svg", "marth.svg", "mega_man.svg",
  "meta_knight.svg", "mewtwo.svg", "minmin.svg", "mr_game_and_watch.svg", "ness.svg", "olimar.svg",
  "pac_man.svg", "packun_flower.svg", "palutena.svg", "peach.svg", "pichu.svg", "pikachu.svg", "pit.svg",
  "pokemon_trainer.svg", "richter.svg", "ridley.svg", "rob.svg", "robin.svg", "rosalina_and_luma.svg", "roy.svg",
  "ryu.svg", "samus.svg", "sheik.svg", "shulk.svg", "simon.svg", "snake.svg", "sonic.svg", "steve.svg", "terry.svg",
  "toon_link.svg", "villager.svg", "wario.svg", "wii_fit_trainer.svg", "wolf.svg", "yoshi.svg", "young_link.svg",
  "zelda.svg", "zero_suit_samus.svg"];
  var dir = "assets/svgs/";
  const mii = "mii_fighter.svg";

  // draws the board; not the best solution, but it works
  function drawBoard () {
    $("#board").empty();

    for (var i = 0; i < files.length; i++) {
      if (i % 10 == 0) {
        $("#board").append("<div class=\"column is-1 is-clickable is-offset-1\"><img class=\"image is-48x48\" src=\"" + dir + files[i] + "\" /> </div>");
      } else {
        $("#board").append("<div class=\"column is-1 is-clickable \"><img class=\"image is-48x48\" src=\"" + dir + files[i] + "\" /> </div>");
      }

      if (i % 10 == 9) {
        $("#board").append("<div class=\"column is-1\"></div>");
      }
    }

    $(".is-clickable").hover(function () {
      $(this).toggleClass("has-background-grey-lighter");
    });

    $(".is-clickable").click(function () {
      $(this).toggleClass("has-background-grey");
    });
  };

  drawBoard();
  
  // on button click, set seed, clear board, and redraw board
  $("#seedbtn").click(function () {
    var seed = $("#seed").val();
    
    if (seed) {
      Math.seedrandom(seed);
    } else {
      Math.seedrandom();
    }

    shuffleArray(files);
    drawBoard();
  });

  // toggles miis
  $("#mii").click(function () {
    if ($(this).prop("checked")) {
      files.push(mii);
      drawBoard();
    } else {
      const i = files.indexOf(mii);
      if (i > -1)
        files.splice(i, 1);
      drawBoard();
    }
  });
});