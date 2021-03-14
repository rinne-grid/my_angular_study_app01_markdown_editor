import { ShortTextPipe } from './short-text.pipe';

describe('ShortTextPipe', () => {
  const pipe = new ShortTextPipe();
  describe('文字数を指定した場合', () => {
    it('指定文字数で省略され、...が付与されること', () => {
      expect(pipe.transform('パフォーマンスにはよくトレードオフが使われる', 9))
      .toBe('パフォーマンスには...');
    });
  });
  describe('文字数を指定しない場合', () => {
    it('40文字で省略され、...が付与されること', () => {
      expect(pipe.transform('パフォーマンスにはよくトレードオフが使われる。パフォーマンスにはよくトレードオフが使われる。'))
      .toBe('パフォーマンスにはよくトレードオフが使われる。パフォーマンスにはよくトレードオフ...');
    });
  });
});
