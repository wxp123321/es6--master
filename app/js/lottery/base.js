/**
 * Created by XP on 2017/12/13.
 */
class Base{
    initPlayList(){
        this.play_list.set('r2',{
            bonus:6,
            tip:'22222',
            name:"任二"
        }).set('r3',{
            bonus:19,
            tip:'33333',
            name:"任三"
        }).set('r4',{
            bonus:78,
            tip:'44444',
            name:"任四"
        }).set('r5',{
            bonus:540,
            tip:'55555',
            name:"任五"
        }).set('r6',{
            bonus:90,
            tip:'66666',
            name:"任六"
        }).set('r7',{
            bonus:26,
            tip:'77777',
            name:"任七"
        }).set('r8',{
            bonus:9,
            tip:'88888',
            name:"任八"
        })
    }

    initNumber(){
        for(let i = 0;i < 12;i++){
            this.number.add((''+i).padStart(2,'0'));
        }
    }

    setOmit(omit){
        let self = this;
        self.omit.clear();
        for(let [index,item] of omit.entries()){
            self.omit.set(index,item)
        }
        $(self.omit_el).each(function (index,item) {
            $(item).text(self.omit.get(index))
        });
    }

    setOpenCode(code){
        let self = this;
        self.open_code.clear();
        for(let item of code.values()){
            self.open_code.add(item);
        }
        self.updateOpenCode && self.updateOpenCode.call(self,code);
    }

    toggleCodeActive(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }

    changePlayNav(e){
        let self = this;
        let $cur = $(e.currentTarget);
        $cur.addClass('active').siblings().removeClass('active');
        self.cur_play = $cur.attr('desc').toLocaleLowerCase();
        $('#zx_sm span').html(self.play_list.get(self.cur_play).tip);
        $('.boll-list .btn-boll').removeClass('btn-boll-active');
        self.getCount();
    }

    assistHandle(e){
        e.preventDefault();
        let self = this;
        let $cur = $(e.currentTarget);
        let index = $cur.index();
        $('.boll-list .btn-boll').removeClass('btn-boll-active');

    }
}