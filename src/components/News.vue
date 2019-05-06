<template>
  <div id="news">
    <v-container>
      <h2>プレスリリース</h2>
      <a
        href="https://prtimes.jp/main/html/rd/p/000000002.000041982.html"
      >2019/4/30 ブロックチェーンを活用したYouTuber/VTuber向けマーケティング支援ツール「アポイタカラ 」で音声ファイルのトークンを開始</a>
      <a
        href="https://prtimes.jp/main/html/rd/p/000000001.000041982.html"
      >2019/3/13 株式会社OverPage、ブロックチェーンを活用したYouTuber/VTuber向けマーケティング支援ツール「アポイタカラ 」のアルファ版を開始</a>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "News"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#news {
  background: white;
  max-width: 780px;
  margin: 16px auto 16px;
  padding: 32px 24px;
  border-radius: 3px;

  a {
    display: block;
    text-align: center;
    background: #f8f8f8;
    text-transform: uppercase;
    text-decoration: underline;
    color: #000;
    padding: 16px;
    border-radius: 4px;
  }
}
#news,
#news a {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
#load {
  color: rgba(0, 0, 0, 0.4);
  text-align: center;
  font-size: 13px;
}
</style>