let timers = process.argv.slice(2).sort();

for (const timer of timers) {

  if (timers[timer] > 0) {

    setTimeout(() => {
      process.stdout.write("Ding!\n");
    }, timer * 1000);

  }

}

