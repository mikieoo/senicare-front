export default interface CareRecord {
    recordNumber: string;
    recordDate: string;
    contents: string;
    usedToolName: string | null;
    count: number | null;
}