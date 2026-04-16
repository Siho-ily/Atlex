"use client";

export default function SignupTermsSection() {
    return (
        <section className="rounded-2xl border border-green-200 bg-green-50 p-5">
            {/* 전체 동의 */}
            <div className="rounded-xl border border-green-200 bg-white px-4 py-4">
                <label className="flex cursor-pointer items-start gap-3">
                    <input type="checkbox" className="mt-1 h-5 w-5" />
                    <div>
                        <p className="text-xl font-bold text-gray-900">
                            모두 동의합니다.
                        </p>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            아틀라스 이용약관, 개인정보 수집 및 이용, 마케팅 정보 수신에 모두 동의합니다.
                        </p>
                    </div>
                </label>
            </div>

            <div className="my-5 border-t border-green-200" />

            {/* 이용약관 */}
            <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4">
                <label className="mb-3 flex cursor-pointer items-center gap-3">
                    <input type="checkbox" className="h-5 w-5" />
                    <span className="text-lg font-semibold text-gray-900">
                        아틀라스 이용약관 동의
                        <span className="ml-2 text-red-500">(필수)</span>
                    </span>
                </label>

                <div className="h-32 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600">
                    아틀라스 서비스 이용을 위한 기본 약관입니다.
                </div>
            </div>

            {/* 개인정보 */}
            <div className="mb-5 rounded-xl border border-gray-200 bg-white p-4">
                <label className="mb-3 flex cursor-pointer items-center gap-3">
                    <input type="checkbox" className="h-5 w-5" />
                    <span className="text-lg font-semibold text-gray-900">
                        개인정보 수집 및 이용 안내
                        <span className="ml-2 text-red-500">(필수)</span>
                    </span>
                </label>

                <div className="h-32 overflow-y-auto rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-600">
                    최소한의 개인정보를 수집합니다.
                </div>
            </div>

            {/* 마케팅 */}
            <div className="rounded-xl border border-gray-200 bg-white p-4">
                <label className="flex cursor-pointer items-center gap-3">
                    <input type="checkbox" className="h-5 w-5" />
                    <span className="text-lg font-semibold text-gray-900">
                        마케팅 정보 수신 동의
                        <span className="ml-2 text-blue-500">(선택)</span>
                    </span>
                </label>

                <p className="mt-3 pl-8 text-sm text-gray-600">
                    이벤트 및 혜택 정보를 받아볼 수 있습니다.
                </p>
            </div>
        </section>
    );
}