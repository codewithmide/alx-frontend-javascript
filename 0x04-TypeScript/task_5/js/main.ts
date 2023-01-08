interface MajorCredits {
    credits: number;
    brand: 'BrandOne';
}

interface MinorCredits {
    credits: number;
    brand: 'BrandTwo';
}

function sumMajorCredits(subject1: MajorCredits, subject2:MajorCredits) {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2:MinorCredits) {
    return subject1.credits + subject2.credits;
}