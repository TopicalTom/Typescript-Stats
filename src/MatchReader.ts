import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
    read(): void;
    data: string[][];
}

// Composition Version
export class MatchReader {
    static csvFile(file: string): MatchReader {
        return new MatchReader(new CsvFileReader(file));
    }
    
    matches: MatchData[] = [];

    constructor( public reader: DataReader ) {}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map(
            (row: string[]): MatchData => { // Adjusts type, row 5 is type assertion
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            });
    }
}