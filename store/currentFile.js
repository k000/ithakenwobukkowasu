//これが初期表示されるmdファイルです。
import file from '~/files/index.md'

export const state = () => ({
    // 初期.mdファイル。
    // 同一名称の場合は代入処理を省略できる。
    file
})


// コミットを経由する
export const actions = {
    setFile( {commit} , newFile){
        commit('setFile',newFile)
    }
}

// .mdファイルを再設定する。
export const mutations = {
    setFile(state,obj) {
        state.file = obj
    }
}

