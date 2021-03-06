import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.csvFile('football.csv');
const summary = Summary.winsAnalysisWithConsoleReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);