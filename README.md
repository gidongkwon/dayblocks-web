# Dayblocks

복잡한 나의 하루, 블럭으로 단순하게

["Block 6"](https://book.interpark.com/product/BookDisplay.do?_method=detail&sc.saNo=001&sc.prdNo=354308432) 라는 시간 관리 방법론을 아시나요? 하루를 6개(오전 2, 오후 2, 저녁 2)의 블럭으로 나눠서 인지적 부담을 최대한 줄여 효율적으로 시간을 관리하는 방법입니다.

![Screenshot of fresh state app](docs/1.png)

나의 블럭을 어떻게 활용할 지 각 블럭의 텍스트 영역을 눌러 간단하게 적어보세요.

## Features

- 할 일 리스트
- 블럭 관리
- 지금 날짜를 기준으로 이전 주, 다음 주 전환
- 화이트 / 다크 테마

## Good to have, Not implemented

- 할 일을 블럭에 할당
- 쉬운 습관 형성을 도와주는 반복 가능한 할 일
- 할 일 마감일 지정 / 알림
- 모바일 앱

## Development

1. git clone
2. `pnpm install`
3. `pnpm dev`

## References

### Concepts

- [블럭식스 레볼루션(Block 6 Revolution)](https://book.interpark.com/product/BookDisplay.do?_method=detail&sc.saNo=001&sc.prdNo=354308432)
- [일상의 황금비율을 찾는 일정 관리법](https://publy.co/content/7084)

### Libraries & Frameworks

- 웹앱 프레임워크: [SvelteKit](https://kit.svelte.dev)
- 컬러 토큰: [Radix Colors](https://www.radix-ui.com/colors)
- 아이콘: [Lucide](https://lucide.dev)
- 저장: [svelte-persisted-store](https://github.com/joshnuss/svelte-persisted-store)

## License

MIT License

Copyright 2023 Gidong Kwon.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
