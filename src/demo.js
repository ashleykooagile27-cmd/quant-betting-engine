const DataIngestion = require('./core/DataIngestion');
const FilterEngine = require('./core/FilterEngine');
const ParlayBuilder = require('./core/ParlayBuilder');

async function runDemo() {
  console.log('\n========================================');
  console.log('QUANT BETTING ENGINE - DEMO');
  console.log('========================================\n');

  const matches = DataIngestion.getSampleData();
  console.log(`✓ Scanned ${matches.length} matches\n`);

  const filterEngine = new FilterEngine();
  const { qualifying, nonQualifying } = filterEngine.filterMatches(matches);

  console.log(`✓ Filtered matches:`);
  console.log(`  - Qualifying: ${qualifying.length}`);
  console.log(`  - Non-Qualifying: ${nonQualifying.length}\n`);

  console.log('ELITE SELECTION POOL:');
  qualifying.forEach((m, i) => {
    console.log(`${i + 1}. ${m.homeTeam.name} vs ${m.awayTeam.name}`);
    console.log(`   Combined xG: ${m.combinedXG?.toFixed(2)}`);
    console.log(`   Over 2.5 Odds: ${m.odds.over25}\n`);
  });

  if (nonQualifying.length > 0) {
    console.log('NON-QUALIFYING:');
    nonQualifying.forEach((m, i) => {
      console.log(`${i + 1}. ${m.homeTeam.name} vs ${m.awayTeam.name}`);
      console.log(`   ❌ ${m.failureReason}\n`);
    });
  }

  const parlayResult = ParlayBuilder.buildParlay(qualifying, 5.0, 10);
  if (parlayResult.success) {
    const t = parlayResult.ticket;
    console.log('PARLAY TICKET:');
    console.log(`ID: ${t.ticketId}`);
    console.log(`Legs: ${t.summary.totalLegs}`);
    console.log(`Total Odds: ${t.summary.totalOdds.toFixed(2)}`);
    console.log(`Stake: $${t.summary.stake}`);
    console.log(`Potential Return: $${t.summary.potentialReturn.toFixed(2)}`);
    console.log(`Profit: $${t.summary.profit.toFixed(2)}\n`);
  }

  console.log('========================================');
  console.log('DEMO COMPLETED');
  console.log('========================================\n');
}

if (require.main === module) {
  runDemo().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = runDemo;
